import {Component, OnInit} from '@angular/core';
import {Role} from '../../../model/enum/role.enum';
import {JwtService} from '../../../services/jwt.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {

  username = 'sdf'; // TODO

  constructor(private jwtService: JwtService) {
  }

  ngOnInit(): void {
  }


  isUserLogged(): boolean {
    return this.jwtService.getUserRoleLogged() !== Role.ROLE_NOT_LOGGED;
  }

  logout(): void {
    this.jwtService.logout();
  }
}
