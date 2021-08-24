import { Component, OnInit } from '@angular/core';
import { FoodGroupsService } from '../services/food-groups.service';

@Component({
  selector: 'fp-food-groups',
  templateUrl: './food-groups.component.html',
  styleUrls: ['./food-groups.component.css']
})
export class FoodGroupsComponent implements OnInit {

  foodGroups;

  constructor(private foodGroupsSvce: FoodGroupsService) { }

  ngOnInit(): void {
    this.foodGroups = this.foodGroupsSvce.getFoodGroups();
    console.log(this.foodGroups);
  }

}
