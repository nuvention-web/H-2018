import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../pages';
import {SettingsPage} from '../settings/settings';
import {AllegensProvider} from '../../providers/allegens/allegens';


/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage( )
@Component(
  {
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
  last: string;

  constructor(public allergies: AllegensProvider, public navCtrl: NavController, public navParams: NavParams) {
    
  
  }

  ngOnInit()
  {
    this.last = this.navCtrl.getPrevious().component.name;
  }

  done(){
   
  this.navCtrl.push(MainPage);
  
   
  }

  done2(){
   
    this.navCtrl.pop();
     
    }
  

}
