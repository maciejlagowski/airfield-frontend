import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/bars/sidebar/sidebar.component';
import { HeadbarComponent } from './components/bars/headbar/headbar.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AddReservationDialogComponent } from './components/reservations/add-reservation-dialog/add-reservation-dialog.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadbarComponent,
    UserListComponent,
    UserFormComponent,
    ReservationsComponent,
    AddReservationDialogComponent,
    FilterPipe,
    LoginComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
