import {Component, OnInit} from '@angular/core';
import {JwtService} from '../../../services/jwt.service';
import {Role} from '../../../model/enum/role.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private jwtService: JwtService) {
  }

  ngOnInit(): void {
  }

  isUserEmployee(): boolean {
    return this.jwtService.isUserEmployee();
  }

  isUserAdmin(): boolean {
    const role = this.jwtService.getUserRoleLogged();
    return role === Role.ROLE_ADMIN;
  }
}
