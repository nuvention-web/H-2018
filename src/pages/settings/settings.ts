import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from '../list/list';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage({name: 'SettingsPage',
segment: 'settings'
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object

  constructor(private iab: InAppBrowser, public navCtrl: NavController)
  {  
  }
  
updateAllergens()
{
  this.navCtrl.push('ListPage');
}



openLink(){
  this.iab.create("https://mypallergy.carrd.co/", '_blank', 'location=yes');
}
 
}

