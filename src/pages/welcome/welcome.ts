import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AllegensProvider} from '../../providers/allegens/allegens';

import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { MyApp } from '../../app/app.component';
import { TabsPage } from '../tabs/tabs';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public c: MyApp, public ga: GoogleAnalytics, public a: AllegensProvider, public navCtrl: NavController) {
    this.c.openPage(TabsPage);
    this.a.start = true;

    this.ga.startTrackerWithId('UA-119666607-1')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('home');
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
  
   }

  

  login() {
    this.navCtrl.push('LoginPage');
  }

  getStarted(){
    this.navCtrl.push('ListPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
