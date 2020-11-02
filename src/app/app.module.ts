import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AddReservationDialogComponent } from './components/reservations/add-reservation-dialog/add-reservation-dialog.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadbarComponent,
    UserListComponent,
    UserFormComponent,
    ReservationsComponent,
    AddReservationDialogComponent,
    FilterPipe
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
