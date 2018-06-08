import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouteGuard } from '@app/core';
import { ListUsersComponent } from './list/list.component';
import { EditUserComponent } from '@app/features/user/edit/edit.component';
import { NewUserComponent } from '@app/features/user/new/new.component';

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
    },
    {
        path: 'user/new',
        component: NewUserComponent,
        canActivate: [AppRouteGuard],
        data: {
          pageName: 'Create User'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule]
})
export class UserRoutingModule { }
