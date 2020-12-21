import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReservationsComponent} from './components/reservations/reservations.component';
import {UserLoginComponent} from './components/user/user-login/user-login.component';
import {WeatherComponent} from './components/weather/weather.component';
import {UserSettingsComponent} from './components/user/user-settings/user-settings.component';
import {EmailComponent} from './components/email/email.component';
import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';

const routes: Routes = [
  {path: '', component: ReservationsComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'user', component: UserSettingsComponent},
  {path: 'email', component: EmailComponent},
  {path: 'admin', component: AdminPanelComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
