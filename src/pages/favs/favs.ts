import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllegensProvider} from '../../providers/allegens/allegens';
import { Cart} from '../../providers/cart/cart';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';


/**
 * Generated class for the FavsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favs',
  templateUrl: 'favs.html',
})
export class FavsPage {

  constructor(public cartp:Cart, public navCtrl: NavController, public navParams: NavParams) {
    
    console.log(this.cart);
  }

  cart: any[];
  clear: boolean;
 
  
  ngOnInit(){
    this.cart = this.cartp.cart;
    this.clear = false;
  }


clearC(){
  
this.cartp.clear = true;
this.cartp.clearCart();
this.cart = this.cartp.cart;
this.clear = this.cartp.clear;
this.clear = false;

}

}