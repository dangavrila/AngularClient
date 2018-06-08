import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { ListUsersComponent } from './list/list.component';
import { UserRoutingModule } from './user.router';
import { EditUserComponent } from '@app/features/user/edit/edit.component';
import { UserFormComponent } from '@app/features/user/form/form.component';
import { NewUserComponent } from '@app/features/user/new/new.component';

@NgModule({
    declarations: [
        ListUsersComponent,
        EditUserComponent,
        UserFormComponent,
        NewUserComponent
    ],
    providers: [],
    imports: [
        AppSharedModule,
        UserRoutingModule
    ]
})
export class UserModule { }
