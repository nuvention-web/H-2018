import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { ReviewService } from '../review-create/review-create.service';
import { Review } from '../card-detail/review';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { CardDetailPage } from '../card-detail/card-detail';
import { Reviews } from '../../providers/providers';




@IonicPage()
@Component({
  selector: 'card-detail-create',
  templateUrl: 'review-create.html',
  providers: [ReviewService]
})
export class ReviewCreatePage  {
  @ViewChild('CardDetailPage') data: CardDetailPage;
  isReadyToSave: boolean;


  review: any;
  item: any;
  
  reviewForm: FormGroup;



  constructor(private db: AngularFireDatabase, public navParams: NavParams, public reviews: Reviews, public af: AngularFireAuth, public navCtrl: NavController, public viewCtrl: ViewController, private reviewService: ReviewService, private fb: FormBuilder, formBuilder: FormBuilder) {
    this.item = navParams.get('item') || reviews.defaultReview;
    
    this.reviewForm = formBuilder.group({
      // name: ['', Validators.required],
      details: ['', Validators.required]});

      this.reviewForm.valueChanges.subscribe((v) => {
        this.isReadyToSave = this.reviewForm.valid;
      });
  
  }



  onSubmit() {
    const  details = this.reviewForm.value.details;
    const name = this.af.auth.currentUser.displayName;
    const profile = this.af.auth.currentUser.photoURL;
    const data = this.navParams.get('item1');
   
    let formRequest = {name, details, profile};
    this.db.list('/' + data + '/reviews').push(formRequest);
    
  }
   /* this.reviewForm = formBuilder.group({
      name: ['', Validators.required],
      details: ['']
    });

    // Watch the form for changes, and
    this.reviewForm.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.reviewForm.valid;
    });
  }
addRev(){
  const {name, details} = this.reviewForm.value;
  let formRequest = { name, details};
  this.db.list('/reviws').push(formRequest).key;
}
  newReview() {
    this.review = this.reviewService.createReview();
    this.buildForm();
  }

  private buildForm() {
    this.reviewForm = this.fb.group({
      name:    ['', Validators.required ],
      details:  ['', ],
    });
    this.review.subscribe(review => {
      this.reviewForm.patchValue(review)
    })
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */

   
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.reviewForm.valid) { return; }
    this.viewCtrl.dismiss(this.reviewForm.value);
  }
}

