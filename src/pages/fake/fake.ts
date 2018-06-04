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
import { CallNumber } from '@ionic-native/call-number';
import {TabsPage}  from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import {CardsPage} from '../cards/cards'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the FakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fake',
  templateUrl: 'fake.html',
})
export class FakePage {

  item: any;
  review: any;
  show: boolean[];
  checked: boolean[][];
  index1: any;
  var: string;
  last: any;
  
  
 
reviewForm: FormGroup;

  currentReviews: Item[];
  reviewsObservable: Observable<any[]>;
  menuTypes: Observable<any[]>;
  information: any[];
  isReadyToSave: boolean;

  constructor(private fb: FormBuilder, formBuilder: FormBuilder, public storage: Storage, private callNumber: CallNumber, public cart:Cart, public allergies :AllegensProvider, private http: HttpClient, public navCtrl: NavController,  private db: AngularFireDatabase, public navParams: NavParams, public reviews: Reviews, public items: Items, public modalCtrl: ModalController) {

    this.item = navParams.get('item') || reviews.defaultReview;
    this.currentReviews = this.reviews.query();
    this.index1 = this.item.index;


    this.reviewForm = formBuilder.group({
       name: ['', Validators.required],
       email: ['', Validators.required],
      details: ['', Validators.required]});

      this.reviewForm.valueChanges.subscribe((v) => {
        this.isReadyToSave = this.reviewForm.valid;
      });
    
    
  }


  done(){
    this.navCtrl.push(TabsPage);
  }




  ngOnInit() {
    this.show = [false, false, false, false, false, false];
    this.menuTypes = this.getReviews('/' + this.item.data );
  
    
  /*  this.db.database.ref("/lous").on("value", function(snapshot) {
      console.log(snapshot.val());
    });

*/
   
    
  }

  



  call() {
    this.var = this.item.number;
    this.callNumber.callNumber(this.var, true);
}









  getReviews(listPath): Observable<any[]> {

 
    return this.db.list(listPath).valueChanges();
    

  }
  

  getCard()
  {
    return this.item.data;
  }




  

 




}
