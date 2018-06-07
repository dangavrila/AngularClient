import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './home/home.component';
import { AppLoginComponent } from './login/login.component';
import { AppAboutComponent } from './about/about.component';
import { AppContactComponent } from './contact/contact.component';
import { AppNotFoundComponent } from './not-found/not-found.component';
import { AppRouteGuard } from '@app/core/guards';

const pagesRoutes: Routes = [
    {
        path: '',
        component: AppHomeComponent
    },
    {
        path: 'login',
        component: AppLoginComponent
    },
    {
        path: 'about',
        component: AppAboutComponent
    },
    {
        path: 'contact',
        component: AppContactComponent,
        canActivate: [AppRouteGuard]
    },
    {
        path: '**',
        component: AppHomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
