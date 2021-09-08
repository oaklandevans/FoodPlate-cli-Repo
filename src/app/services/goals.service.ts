import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../models/Goal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  goalUrl = 'http://localhost:3006/goals';

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  errorMessage: string;


  constructor(private http: HttpClient) { }

  // get all goals from server
  getGoals(): Observable<Goal> {
    const results: Observable<Goal> = this.http.get<Goal>(this.goalUrl);
    console.log(`getGoals() returned ${results}`);
    return results;
  }

  // get one goal by id from server
  getGoalById(goalId: string): Observable<Goal> {
    const results: Observable<Goal> = this.http.get<Goal>(`${this.goalUrl}/${goalId}`);
    console.log(`getGoals(${goalId}) returned ${results}`);
    return results;
  }

  // add a goal
  addGoal(goal: Goal): Observable<Goal> {
    const results: Observable<Goal> = this.http.post<Goal>(this.goalUrl, goal, this.jsonContentTypeHeaders);
    console.log(`addGoal(${goal}) returned ${results}`);
    console.log(typeof goal.id);
    return results;
  }

  // update a goal
  updateGoal(goal: Goal): Observable<Goal> {
    const results: Observable<Goal> = this.http.put<Goal>(
      `${this.goalUrl}/${goal.id}`,
      goal,
      this.jsonContentTypeHeaders
    );
    console.log(`updateGoal(${goal}) returned ${results}`);
    return results;
  }

  // delete a goal
  deleteGoalById(goalId: string): Observable<Goal> {
    const results: Observable<Goal> = this.http.delete<Goal>(`${this.goalUrl}/${goalId}`);
    console.log(`deleteGoalById(${goalId}) returned ${results}`);
    return results;
  }

}
