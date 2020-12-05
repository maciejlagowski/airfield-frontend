import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtService} from '../services/jwt.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token: string = localStorage.getItem('LOGIN_TOKEN');
    const reqClone = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return next.handle(reqClone);
  }
}
