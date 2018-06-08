import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { ListUsersComponent } from './list/list.component';
import { UserRoutingModule } from './user.router';
import { EditUserComponent } from './edit/edit.component';
import { UserFormComponent } from './form/form.component';

@NgModule({
    declarations: [
        ListUsersComponent,
        EditUserComponent,
        UserFormComponent
    ],
    providers: [],
    imports: [
        AppSharedModule,
        UserRoutingModule
    ]
})
export class UserModule { }
