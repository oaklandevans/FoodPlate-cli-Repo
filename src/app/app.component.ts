import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  user: User;

  constructor( private userService: UserService, private titleService: Title ) {}

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate! ');
    this.user = this.userService.getUser();
  }
}
