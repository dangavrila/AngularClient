import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './home/home.component';
import { AppLoginComponent } from './login/login.component';
import { AppAboutComponent } from './about/about.component';
import { AppContactComponent } from './contact/contact.component';
import { AppNotFoundComponent } from './not-found/not-found.component';
import { PagesRoutingModule } from './pages.router';
import { AppSharedModule } from '@app/shared';

@NgModule({
    declarations: [
        AppHomeComponent,
        AppLoginComponent,
        AppAboutComponent,
        AppContactComponent,
        AppNotFoundComponent
    ],
    imports: [
        AppSharedModule,
        PagesRoutingModule
    ]
})
export class AppPagesModule { }
