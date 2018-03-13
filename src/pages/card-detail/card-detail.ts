import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Reviews } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'card-detail',
  templateUrl: 'card-detail.html'
})


export class CardDetailPage {
  item: any;
  review: any;

  currentReviews: Item[];
  reviewsObservable: Observable<any[]>;

  constructor(public navCtrl: NavController,  private db: AngularFireDatabase, navParams: NavParams, public reviews: Reviews, public items: Items, public modalCtrl: ModalController) {
    this.item = navParams.get('item') || reviews.defaultReview;
    this.currentReviews = this.reviews.query();

    
  }

  ngOnInit() {
    console.log('/' + this.item.data + '/reviews');
    this.reviewsObservable = this.getReviews('/' + this.item.data + '/reviews');
    
    
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


 

}
