import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { ListUsersComponent } from './list/list.component';
import { UserRoutingModule } from './user.router';

@NgModule({
    declarations: [
        ListUsersComponent
    ],
    providers: [],
    imports: [
        AppSharedModule,
        UserRoutingModule
    ]
})
export class UserModule { }
