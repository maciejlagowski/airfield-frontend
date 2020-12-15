import {Injectable} from '@angular/core';
import {User} from '../model/dto/user';
import {HttpClient} from '@angular/common/http';
import {Jwt} from '../model/dto/jwt';
import {Role} from '../model/enum/role.enum';
import {NotificationService} from './notification.service';
import {NotificationEnum} from '../model/enum/notification.enum';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private readonly loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient, private notificationService: NotificationService, private router: Router) {
  }

  login(user: User): void {
    this.http.post<Jwt>(this.loginUrl, user).subscribe(data => {
      localStorage.setItem('LOGIN_TOKEN', data.token);
      localStorage.setItem('JWT_EXP_TIME', data.expirationTime);
      localStorage.setItem('USER_ROLE', data.role);
      localStorage.setItem('USER_NAME', data.name);
      this.gotoReservations();
    });
    this.notificationService.removeNotification(NotificationEnum.NOT_LOGGED_ERROR);
  }

  logout(): void {
    localStorage.removeItem('LOGIN_TOKEN');
    localStorage.removeItem('JWT_EXP_TIME');
    localStorage.setItem('USER_ROLE', Role.ROLE_NOT_LOGGED);
    this.notificationService.addNotification(NotificationEnum.NOT_LOGGED_ERROR, 'User not logged in, please log in or register');
  }

  getUserRoleLogged(): Role {
    if (this.isTokenExpired()) {
      this.logout();
    } else if (localStorage.getItem('USER_ROLE') === null) {
      localStorage.setItem('USER_ROLE', Role.ROLE_NOT_LOGGED);
    }
    return Role[localStorage.getItem('USER_ROLE')];
  }

  isTokenExpired(): boolean {
    const expTime = localStorage.getItem('JWT_EXP_TIME');
    if (expTime !== null) {
      const currDate = new Date();
      return currDate.getTime() > Number(expTime);
    } else {
      return false;
    }
  }

  isUserLogged(): boolean {
    return this.getUserRoleLogged() !== Role.ROLE_NOT_LOGGED;
  }

  isUserEmployee(): boolean {
    const role = this.getUserRoleLogged();
    return role === Role.ROLE_EMPLOYEE || role === Role.ROLE_ADMIN;
  }

  gotoReservations(): void {
    this.router.navigate(['/reservations']);
  }
}
