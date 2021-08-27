import { Component, OnInit } from '@angular/core';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-todays-goal',
  templateUrl: './todays-goal.component.html',
  styleUrls: ['./todays-goal.component.css']
})
export class TodaysGoalComponent implements OnInit {

  goals: Array<string> = [
    'Eat more Fruits',
    'Eat more Vegetables',
    'Eat more Protein',
    'Eat more Grains',
    'Exercise',
  ];

  constructor(private todaysGoalSvce: TodaysGoalService) { }

  ngOnInit(): void {
  }

  sendGoal(goal): void {
    this.todaysGoalSvce.sendGoal(goal);
  }
  clearGoal(): void {
    this.todaysGoalSvce.clearGoal();
  }


}
