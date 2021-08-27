import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  // @Input()
  // user: User;
  currentUser: User;

  constructor(private userService: UserService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate! ');
    // this.user = this.userService.getUser();
    this.userService.getUser();
    this.userService.currentUser
      .subscribe(user => this.currentUser = user);
  }
}
