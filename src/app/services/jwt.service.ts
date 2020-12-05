import {Injectable} from '@angular/core';
import {User} from '../model/dto/user';
import {HttpClient} from '@angular/common/http';
import {Jwt} from '../model/dto/jwt';
import {Role} from '../model/enum/role.enum';
import {ErrorService} from './error.service';
import {ErrorEnum} from '../model/enum/error.enum';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private readonly loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  login(user: User): void {
    this.http.post<Jwt>(this.loginUrl, user).subscribe(data => {
      localStorage.setItem('LOGIN_TOKEN', data.token);
      localStorage.setItem('JWT_EXP_TIME', data.expirationTime);
      localStorage.setItem('USER_ROLE', data.role);
    });
    this.errorService.removeError(ErrorEnum.NOT_LOGGED);
  }

  logout(): void {
    localStorage.removeItem('LOGIN_TOKEN');
    localStorage.removeItem('JWT_EXP_TIME');
    localStorage.setItem('USER_ROLE', Role.ROLE_NOT_LOGGED);
    this.errorService.addError(ErrorEnum.NOT_LOGGED, 'User not logged in, please log in or register');
  }

  getUserRoleLogged(): Role {
    if (this.isTokenExpired()) {
      this.logout();
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
}
