import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../../model/dto/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  user: User = new User();

  usersUrl = 'http://localhost:8080/users';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  login(): void {

    const params: HttpParams = new HttpParams().set('user', JSON.stringify(this.user));
    console.log(JSON.stringify(this.user));
    const bool = this.http.get<boolean>(this.usersUrl, {params});
    bool.subscribe(value => console.log( 'dd ' + value));
  }

}
