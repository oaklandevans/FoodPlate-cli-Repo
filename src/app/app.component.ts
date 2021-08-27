import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Requirement } from './models/requirement';
import { User } from './models/User';
import { RequirementsService } from './services/requirements.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  currentUser: User;

  private requirements: Array<Requirement>;

  constructor(
    private userService: UserService,
    private titleService: Title,
    private reqsService: RequirementsService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate! ');
    // this.user = this.userService.getUser();
    this.userService.getUser();
    this.userService.currentUser
      .subscribe(user => this.currentUser = user);
    // console.log(this.reqsService.getRequirements());
    this.reqsService.getRequirements().subscribe(
      reqs => {
        this.requirements = reqs;
        console.table(this.requirements);
        console.log(this.requirements[1].ageGroup);
      });
  }
}
