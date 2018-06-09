import { Component, OnInit } from '@angular/core';
import { User, UserResponse } from '@app/models';
import { UserService } from '@app/core';
import { COLUMNS } from './column.definition';
import { MatTableDataSource, PageEvent, MatDialog } from '@angular/material';
import { HasLoadingSpinnerBase } from '@app/shared';
import { ModalConfirmationComponent } from '@app/shared/components/modal-confirmation/modal-confirmation.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListUsersComponent extends HasLoadingSpinnerBase implements OnInit {

  dataSource: MatTableDataSource<User>;
  columns = [];
  columnDefs = [];
  editing = false;
  actionColumnWidth = 160;
  filter: User = new User();

  total = 0;
  page = 0;
  rows = 10;

  constructor(private service: UserService, private route: ActivatedRoute, private dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.setColumns();
    this.dataSource = new MatTableDataSource([]);

    this.wrapObservableWithSpinner(this.service.get())
    .subscribe((response: UserResponse) => {
      this.updateDataSource(response);
    });
  }

  changePage(pageEvent: PageEvent) {
    this.page = pageEvent.pageIndex;
    this.rows = pageEvent.pageSize;
    this.service.get(this.page, this.rows)
      .subscribe((response: UserResponse) => {
        this.updateDataSource(response);
      });
  }

  delete(user: User) {
    this.dialog.open(ModalConfirmationComponent, {
      width: '400px',
      height: '200px',
      data: user
    }).afterClosed()
    .subscribe(response => {
      if (response) {
        this.service.delete(user)
        .subscribe(() => {
          this.ngOnInit();
        }, console.error);
      }
    });
  }

  private setColumns() {
    this.columnDefs = COLUMNS.slice();
    this.columns = [];
    this.columnDefs.forEach( element => {
      this.columns.push(element.property);
    });
    this.columns.push('actions');
  }

  private updateDataSource(response: UserResponse) {
    this.dataSource.data = response.data as Array<User>;
    this.total = response.total;
  }

}
