import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout.component';
import { AppHeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        // Components
        AppLayoutComponent,
        AppHeaderComponent,
        AppFooterComponent
    ],
    imports: [
        // Modules
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
