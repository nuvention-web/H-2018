import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Reviews } from '../../providers/providers';
import { Geolocation } from '@ionic-native/geolocation';
import {AllegensProvider} from '../../providers/allegens/allegens';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database'; 


@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
 

  cardItems: Item[];
  currentItems: any = [];
  menuTypes: any =[];
  count: number = 0;
  types: any = [];
  counts: number[] =[0,0,0,0,0,0,0,0,0,0,0];
  countsReal: number[] =[0,0,0,0,0,0,0,0,0,0,0];



  constructor(private db: AngularFireDatabase, public allergies: AllegensProvider, private geolocation: Geolocation, public navCtrl: NavController, public items: Items, public reviews: Reviews, public modalCtrl: ModalController) {
    this.cardItems = this.items.query();
    
  }

  



  


 

ngOnInit(){
  
  this.sortItems(this.allergies.lat, this.allergies.lng);
   
   
    
}

  
    
  
ionViewWillEnter() {

  this.counts  =[0,0,0,0,0,0,0,0,0,0,0];
  this.countsReal =[0,0,0,0,0,0,0,0,0,0,0];



  for (let index = 0; index < this.cardItems.length; index++) {
    this.menuTypes[index] = this.getReviews('/' + this.cardItems[index].data );
    this.menuTypes[index].subscribe(types => {
      this.types[index] = types as any;
     
      for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < types[i].children.length; j++) {

        if(types[i].children[j].menuItem)
        {
          this.counts[index]++;
        }

        if(!(this.allergies.wheat && types[i].children[j].wheat == 'TRUE') && !(this.allergies.peanuts && types[i].children[j].peanuts == 'TRUE') 
        && !(this.allergies.treenuts && types[i].children[j].treenuts == 'TRUE') && !(this.allergies.soy && types[i].children[j].soy == 'TRUE')
        && !(this.allergies.milk && types[i].children[j].milk == 'TRUE') && !(this.allergies.eggs && types[i].children[j].eggs == 'TRUE')
        && !(this.allergies.shellfish && types[i].children[j].shellfish == 'TRUE') && !(this.allergies.fish && types[i].children[j].fish == 'TRUE'))
        {
          this.countsReal[index]++;
        }
        

        
        
        }
        
       
        
      }
      
      
     
      this.cardItems[index].percent = ((this.countsReal[index] / this.counts[index]) * 100).toFixed(0);
      console.log(this.cardItems[index].percent);
      this.sortItems(this.allergies.lat, this.allergies.lng);
}



); 
}
}







getReviews(listPath): Observable<any[]> {

 
  return this.db.list(listPath).valueChanges();
  

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

  
  });

 /* this.cardItems.sort((locationA, locationB) => {
    return locationA.distance - locationB.distance;

    */

    this.cardItems.sort(function (a, b){


      return b.percent - a.percent;
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