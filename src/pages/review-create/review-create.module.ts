import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ReviewCreatePage } from './review-create';

@NgModule({
  declarations: [
    ReviewCreatePage ,
  ],
  imports: [
    IonicPageModule.forChild(ReviewCreatePage ),
    TranslateModule.forChild()
  ],
  exports: [
    ReviewCreatePage 
  ]
})
export class ReviewCreatePageModule { }
