import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout.component';
import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '@app/shared';

@NgModule({
    declarations: [
        // Components
        AppLayoutComponent,
        AppHeaderComponent,
        AppFooterComponent
    ],
    imports: [
        // Modules
        RouterModule,
        AppSharedModule
    ],
    providers: [
        // Services
    ],
    exports: [
        // Exported Components
        AppLayoutComponent
    ],
    entryComponents: [
        // Dynamic Components
    ]
})
export class AppLayoutModule { }
