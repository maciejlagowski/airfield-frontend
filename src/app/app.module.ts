import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SidebarComponent} from './components/bars/sidebar/sidebar.component';
import {HeadBarComponent} from './components/bars/headbar/head-bar.component';
import {UserListComponent} from './components/user/user-list/user-list.component';
import {UserFormComponent} from './components/user/user-form/user-form.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './services/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReservationsComponent} from './components/reservations/reservations.component';
import {AddReservationDialogComponent} from './components/reservations/add-reservation-dialog/add-reservation-dialog.component';
import {FilterPipe} from './pipes/filter.pipe';
import {LoginComponent} from './components/login/login.component';
import {CommonModule, Location} from '@angular/common';
import {DetailReservationDialogComponent} from './components/reservations/detail-reservation-dialog/detail-reservation-dialog.component';
import {WeatherComponent} from './components/weather/weather.component';
import {WeatherWidgetComponent} from './components/weather/weather-widget/weather-widget.component';
import {JwtInterceptor} from './interceptors/token-interceptor.service';
import {UserSettingsComponent} from './components/user/user-settings/user-settings.component';
import {ErrorHandlerInterceptor} from './interceptors/error-handler.interceptor';
import {NotificationsComponent} from './components/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadBarComponent,
    UserListComponent,
    UserFormComponent,
    ReservationsComponent,
    AddReservationDialogComponent,
    FilterPipe,
    LoginComponent,
    DetailReservationDialogComponent,
    WeatherComponent,
    WeatherWidgetComponent,
    UserSettingsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [UserService, Location,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
