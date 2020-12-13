import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReservationsComponent} from './components/reservations/reservations.component';
import {UserLoginComponent} from './components/user/user-login/user-login.component';
import {WeatherComponent} from './components/weather/weather.component';
import {UserSettingsComponent} from './components/user/user-settings/user-settings.component';

const routes: Routes = [
  {path: '', component: ReservationsComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'user', component: UserSettingsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
