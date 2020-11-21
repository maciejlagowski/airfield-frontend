import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReservationsComponent} from './components/reservations/reservations.component';
import {LoginComponent} from './components/login/login.component';
import {WeatherComponent} from './components/weather/weather.component';

const routes: Routes = [
  {path: '', component: ReservationsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'reservations', component: ReservationsComponent},
  // { path: 'users', component: UserListComponent },
  // { path: 'adduser', component: UserFormComponent }
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
