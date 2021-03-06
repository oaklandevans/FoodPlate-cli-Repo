import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodGroupsService {

  // tslint:disable-next-line: quotemark
  private foodIconsPath = "assets/images/foodImages/";
  private foodGroups = [
    {
      "name": "fruit",
      "icon": this.foodIconsPath + 'apple.png'
    },
    {
      "name": "grains",
      "icon": this.foodIconsPath + 'bread.png'
    },
    {
      "name": "protein",
      "icon": this.foodIconsPath + 'chicken.png'
    },
    {
      "name": "vegetables",
      "icon": this.foodIconsPath + 'broccoli.png'
    },
    {
      "name": "dairy",
      "icon": this.foodIconsPath + 'milk.png'
    },
  ];

  getFoodGroups() {
    return this.foodGroups;
  }

  constructor() { }
}
