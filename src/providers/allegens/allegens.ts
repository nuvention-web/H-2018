import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AllegensProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AllegensProvider {
  peanuts: boolean = false;
  treenuts: boolean = false;
  wheat: boolean = false;
  milk: boolean = false;
  soy: boolean = false;
  eggs: boolean = false;
  fish: boolean = false;
  shellfish: boolean = false;

  constructor(public http: HttpClient) {
    console.log();
  }

}
