import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { ResttestComponent } from './components/resttest/resttest.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeadbarComponent,
    CalendarComponent,
    ModalDialogComponent,
    ResttestComponent,
    UserListComponent,
    UserFormComponent
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
