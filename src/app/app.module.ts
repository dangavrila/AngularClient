import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms' ;
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/layout.module';
import { AppPagesModule, UserModule } from '@app/features';
import { AppCoreModule } from '@app/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Browser Module
    BrowserModule,
    RouterModule.forRoot([]),

    // Core functionality
    AppCoreModule,

    // Feature Module
    AppLayoutModule,
    AppPagesModule,
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
