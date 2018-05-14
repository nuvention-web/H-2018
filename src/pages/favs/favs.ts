import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllegensProvider} from '../../providers/allegens/allegens';
import { Cart} from '../../providers/cart/cart';
import { SocialSharing } from '@ionic-native/social-sharing';


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

  constructor(public cartp:Cart, public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
    
  
  }

  cart: any[];
  clear: boolean;




  compilemsg(){

    if(this.cart.length != 0)
    {
    var msg = this.cart[0];
    for (let index = 1; index < this.cart.length; index++) {
      
       msg.concat("\n " + this.cart[index]);
      
    }
    
    return msg.concat(" \n Sent from Pallergy !");
  }

}
  
otherShare(){

  console.log("hi");
  this.socialSharing.share("Genral Share Sheet",null/*Subject*/,null/*File*/,"https://pointdeveloper.com")
  .then(()=>{
      alert("Success");
    },
    ()=>{
       alert("failed")
    })

    
}


  share()
  {
    var msg = this.compilemsg();
    this.socialSharing.share(msg, null, null, null);
  }
 
  
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