import {Component, OnInit} from '@angular/core';
import {JwtService} from '../../../services/jwt.service';

@Component({
  selector: 'app-headbar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {

  username = '';

  constructor(private jwtService: JwtService) {
  }

  ngOnInit(): void {
  }

  isUserLogged(): boolean {
    this.username = localStorage.getItem('USER_NAME');
    return this.jwtService.isUserLogged();
  }

  logout(): void {
    this.jwtService.logout();
    location.reload();
  }
}
