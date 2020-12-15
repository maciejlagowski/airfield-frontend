import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Email} from '../model/dto/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly emailUrl: string;

  constructor(private http: HttpClient) {
    this.emailUrl = 'http://localhost:8080/email';
  }

  public sendEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(this.emailUrl, email);
  }
}
