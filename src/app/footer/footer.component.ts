import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  goal: any;
  subscription: Subscription;
  versionString: string = "1.0.0";
  icon: string = 'assets/images/icons/icons-29.png';
  logoAlt: string = 'FoodPlate logo';
  isCurrent: boolean = false;

  constructor(private todaysGoalSvce: TodaysGoalService) {
    this.subscription = this.todaysGoalSvce.getGoal()
      .subscribe(goal => {
        this.goal = goal;
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearGoal(): void {
    this.todaysGoalSvce.clearGoal();
  }

  moreInfo() {
    alert('for more info see choosemyplate.gov');
  }

}
