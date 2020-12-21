import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/dto/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);
  }

  public getUser(userId: string): Observable<User> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<User>(this.usersUrl, {params});
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(this.usersUrl, user);
  }

  public updateRole(user: User): Observable<User> {
    return this.http.patch<User>(this.usersUrl, user);
  }

  public delete(user: User): Observable<User> {
    const params = new HttpParams().set('id', user.id);
    return this.http.delete<User>(this.usersUrl, {params});
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl + '/register', user);
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + '/all');
  }

  public getLoggedUser(): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/logged');
  }

  public resetPassword(email: string): Observable<User> {
    const params = new HttpParams().set('email', email);
    return this.http.patch<User>(this.usersUrl + '/reset-password', {}, {params});
  }
}
