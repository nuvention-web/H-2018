import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Reviews } from '../../providers/providers';
import { DataSnapshot } from '@firebase/database';
import { HttpClient } from '@angular/common/http';
import { AllegensProvider} from '../../providers/allegens/allegens';
import { Cart} from '../../providers/cart/cart';



 

@IonicPage()
@Component({
  selector: 'card-detail',
  templateUrl: 'card-detail.html',
  styles: ['pages/card-detail/card-detail.scss']
})


export class CardDetailPage {
  item: any;
  review: any;
  show: boolean[];
  checked: boolean[][];
  index1: any;
  
  
 


  currentReviews: Item[];
  reviewsObservable: Observable<any[]>;
  menuTypes: Observable<any[]>;
  information: any[];
  

  constructor(public cart:Cart, public allergies :AllegensProvider, private http: HttpClient, public navCtrl: NavController,  private db: AngularFireDatabase, navParams: NavParams, public reviews: Reviews, public items: Items, public modalCtrl: ModalController) {
   this.item = navParams.get('item') || reviews.defaultReview;
    this.currentReviews = this.reviews.query();
    this.index1 = this.item.index;
    console.log(this.index1);

  
  
    
    
  }


  ngOnInit() {
    this.show = [false, false, false, false, false, false];
    this.menuTypes = this.getReviews('/' + this.item.data );
    
  /*  this.db.database.ref("/lous").on("value", function(snapshot) {
      console.log(snapshot.val());
    });

*/
    
  }

  shower(i){
    this.show[i] = !this.show[i];
  }



 
  toggleSection(i) {
   
    this.information[i].open = !this.information[i].open;
  }
 



  getReviews(listPath): Observable<any[]> {

 
    return this.db.list(listPath).valueChanges();
    

  }
  

  getCard()
  {
    return this.item.data;
  }



  addReview() {
    this.navCtrl.push('ReviewCreatePage', {
      item1: this.item.data,
    });
  }


  addToCart(item, i, j) {

    
    let fav = this.item.name + " - " + item;
    let index = this.cart.cart.indexOf(fav);
    //item.checked=false;
    if (index == -1 ) {
      this.cart.cart.push(fav);
      this.cart.fav[this.index1][i][j] = !this.cart.fav[this.index1][i][j];
    }
    else{
    this.cart.cart.splice(index, 1);
    this.cart.fav[this.index1][i][j] = !this.cart.fav[this.index1][i][j];
    }
   
   
  }

  

 

}
