import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouteGuard } from '@app/core';
import { ListUsersComponent } from './list/list.component';
import { EditUserComponent } from '@app/features/user/edit/edit.component';

const userRoutes: Routes = [
    {
        path: 'user',
        component: ListUsersComponent,
        canActivate: [AppRouteGuard]
    },
    {
        path: 'user/:id',
        component: EditUserComponent,
        canActivate: [AppRouteGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule]
})
export class UserRoutingModule { }
