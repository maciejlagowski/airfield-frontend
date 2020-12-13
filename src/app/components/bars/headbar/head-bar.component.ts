import {Component, OnInit} from '@angular/core';
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
    return this.jwtService.isUserLogged();
  }

  logout(): void {
    this.jwtService.logout();
  }
}
