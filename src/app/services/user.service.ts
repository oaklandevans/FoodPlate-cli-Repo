import { Injectable, Optional } from '@angular/core';

import { User } from '../models/User';
import { UserStatusService } from './user-status.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User(
    1, 'Oakland', 'M', '32+', 'M32+', {},
    {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false}, false, 'kevin@kevinruse.com'
  );

  getUser(): User {
    return this.user;
  }

  constructor( @Optional() private userStatusService: UserStatusService ) {
    this.userStatusService.getUserStatus(this.user);
  }
}
