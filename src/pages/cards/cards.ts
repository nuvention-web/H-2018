import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Reviews } from '../../providers/providers';
import { Geolocation } from '@ionic-native/geolocation';
import {AllegensProvider} from '../../providers/allegens/allegens';



@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
 

  cardItems: Item[];
  currentItems: any = [];

  constructor(public data: AllegensProvider, private geolocation: Geolocation, public navCtrl: NavController, public items: Items, public reviews: Reviews, public modalCtrl: ModalController) {
    this.cardItems = this.items.query();
    
  }


 

ngOnInit(){
  

  console.log("Card page");

    this.sortItems(this.data.lat, this.data.lng);

}



  
  openItem(item: Item) {
    this.navCtrl.push('CardDetailPage', {
      item: item
    });
  }


  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  sortItems(one, two)
  {

  let usersLocation = {
    lat:  one,
    lng: two
  }

  console.log(usersLocation);
  

  this.cardItems.map((item) => {

      let placeLocation = {
          lat: item.lat,
          lng: item.lng
      };

      item.distance  = this.getDistanceBetweenPoints(
          usersLocation,
          placeLocation,
          'miles'
      ).toFixed(2);

  console.log(item.distance);
  });

  this.cardItems.sort((locationA, locationB) => {
    return locationA.distance - locationB.distance;
});




  }





  getDistanceBetweenPoints(start, end, units){
 
    let earthRadius = {
        miles: 3958.8,
        km: 6371
    };

    let R = earthRadius[units || 'miles'];
    let lat1 = start.lat;
    let lon1 = start.lng;
    let lat2 = end.lat;
    let lon2 = end.lng;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;

}

toRad(x){
    return x * Math.PI / 180;
}



 
}