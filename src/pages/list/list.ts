import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../pages';
import {AllegensProvider} from '../../providers/allegens/allegens';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {


  peanuts: boolean = false;
  treenuts: boolean = false;
  wheat: boolean = false;
  milk: boolean = false;
  soy: boolean = false;
  eggs: boolean = false;
  fish: boolean = false;
  shellfish: boolean = false;

  constructor(public allergies: AllegensProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  done(){
  this.navCtrl.push(MainPage);
  console.log(this.allergies.peanuts);
  console.log(this.allergies.treenuts);
  console.log(this.allergies.wheat);
  console.log(this.allergies.milk);
  console.log(this.allergies.soy);
  console.log(this.allergies.eggs);
  console.log(this.allergies.fish);
  console.log(this.allergies.shellfish);
  }
  

}
