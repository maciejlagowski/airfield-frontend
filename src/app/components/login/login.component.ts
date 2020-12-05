import {Component, OnInit} from '@angular/core';
import {User} from '../../model/dto/user';
import {JwtService} from '../../services/jwt.service';
import {Role} from '../../model/enum/role.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  user: User = new User();

  constructor(private jwtService: JwtService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.jwtService.login(this.user);
  }

  logout(): void {
    this.jwtService.logout();
  }

  isUserLogged(): boolean {
    return this.jwtService.getUserRoleLogged() !== Role.ROLE_NOT_LOGGED;
  }

  // TODO register, password forget reset
}
