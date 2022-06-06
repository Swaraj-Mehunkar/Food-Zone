import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  static getAll: any;
  getFoodByTag(params: Params): Foods {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
