import {Component, OnInit} from '@angular/core';
import {JwtService} from '../../../services/jwt.service';

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
}
