import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/dto/user';
import {JwtService} from '../../services/jwt.service';
import {StaticToolsService} from '../../services/static-tools.service';
import {Role} from '../../model/enum/role.enum';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  user: User;
  userChange: User;
  userLoaded: Promise<boolean>;

  constructor(private userService: UserService, private jwtService: JwtService) {
  }

  ngOnInit(): void {
    this.userService.getLoggedUser().subscribe(data => {
      this.user = data;
      this.userChange = StaticToolsService.clone(data);
      this.userLoaded = Promise.resolve(true);
    });
  }

  setUser(user: User): void {
    this.user = user;
    this.userChange = StaticToolsService.clone(user);
  }

  isUserAdmin(): boolean {
    return this.jwtService.getUserRoleLogged() === Role.ROLE_ADMIN;
  }
}
