import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/models';
import { UserService } from '@app/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  message: string;

  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.getUser(parseInt(params.id, 10));
    });
  }

  ngOnInit() {
  }

  save(user: User) {
    this.service.update(user).subscribe(
      (response: any) => {
        this.redirectToList();
      },
      (errorResponse) => {
        this.message = errorResponse.error;
      }
    );
  }

  private redirectToList() {
    this.router.navigateByUrl('user');
  }

  private getUser(id: number) {
    this.service.find(id).subscribe((response: User) => {
      this.user = response;
    }, console.error);
  }

  cancel() {
    this.redirectToList();
  }

}
