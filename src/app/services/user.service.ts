import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Reservation} from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);
  }

  public login(user: User): Observable<boolean> {
    return null;
    // const params: HttpParams = new HttpParams().set('user', JSON.stringify(user));
    // this.http.get<boolean>(this.usersUrl, {params}).subscribe(isValid => {
    //   if (isValid) {
    //     sessionStorage.setItem('token',
    //       btoa(this.user.name + ':'
    //         + this.user.password));
    //     this.router.navigate(['']);
    //   } else {
    //     alert('Authentication failed.');
    //   }
    // });
  }
}
