import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.user = new User();
  }

  onSubmit(): void {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList(): void {
    this.router.navigate(['/users']);
  }
}
