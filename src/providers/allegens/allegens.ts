import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';


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
  lat: number;
  lng: number;

  constructor(public http: HttpClient, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log(this.lat);
    })
    .catch((error) => {
       console.log('Error getting location', error);
     });
  

  
    }

    }
