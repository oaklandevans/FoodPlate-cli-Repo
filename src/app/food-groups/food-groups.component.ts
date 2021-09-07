import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodGroupsService } from '../services/food-groups.service';

@Component({
  selector: 'fp-food-groups',
  templateUrl: './food-groups.component.html',
  styleUrls: ['./food-groups.component.css']
})
export class FoodGroupsComponent implements OnInit {

  foodGroups;

  constructor(
    private foodGroupsSvce: FoodGroupsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.foodGroups = this.foodGroupsSvce.getFoodGroups();
    console.log(this.foodGroups);
  }

  showGroup(group) {
    console.log(group.name);
    this.router.navigate([group.name], {
      relativeTo: this.route, queryParams: {
        group: `${group.name}`
      }
    });
  }

}
