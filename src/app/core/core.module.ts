import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor, TokenInterceptor } from './interceptors';
import { AuthService, UserService, ScreenService } from './services';
import { AppRouteGuard } from '@app/core/guards';

@NgModule({
    imports: [],
    providers: [
        AuthService,
        UserService,
        ScreenService,
        AppRouteGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    declarations: []
})
export class AppCoreModule { }
