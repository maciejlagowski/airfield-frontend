import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SidebarComponent} from './components/bars/sidebar/sidebar.component';
import {HeadBarComponent} from './components/bars/headbar/head-bar.component';
import {UserListComponent} from './components/user/user-list/user-list.component';
import {UserRegisterComponent} from './components/user/user-register/user-register.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './services/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReservationsComponent} from './components/reservations/reservations.component';
import {AddReservationDialogComponent} from './components/reservations/add-reservation-dialog/add-reservation-dialog.component';
import {UserFilterPipe} from './pipes/user-filter.pipe';
import {UserLoginComponent} from './components/user/user-login/user-login.component';
import {CommonModule, Location} from '@angular/common';
import {DetailReservationDialogComponent} from './components/reservations/detail-reservation-dialog/detail-reservation-dialog.component';
import {WeatherComponent} from './components/weather/weather.component';
import {WeatherWidgetComponent} from './components/weather/weather-widget/weather-widget.component';
import {JwtInterceptor} from './interceptors/token-interceptor.service';
import {UserSettingsComponent} from './components/user/user-settings/user-settings.component';
import {ErrorHandlerInterceptor} from './interceptors/error-handler.interceptor';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {EmailComponent} from './components/email/email.component';
import {LoaderComponent} from './components/loader/loader.component';
import {LoaderInterceptor} from './interceptors/loader.interceptor';
import {OverlayModule} from '@angular/cdk/overlay';
import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import {WeatherAlertDetailsComponent} from './components/weather/weather-alert-details/weather-alert-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadBarComponent,
    UserListComponent,
    UserRegisterComponent,
    ReservationsComponent,
    AddReservationDialogComponent,
    UserFilterPipe,
    UserLoginComponent,
    DetailReservationDialogComponent,
    WeatherComponent,
    WeatherWidgetComponent,
    UserSettingsComponent,
    NotificationsComponent,
    EmailComponent,
    LoaderComponent,
    AdminPanelComponent,
    WeatherAlertDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    OverlayModule
  ],
  providers: [UserService, Location,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
