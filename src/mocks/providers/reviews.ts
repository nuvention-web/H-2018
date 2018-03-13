import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Reviews {
  reviews: Item[] = [];

  defaultReview: any = {
    "author": "Burt Bear",
    "profilePic": "assets/img/user.png",
    "rating": "",
    "details": "Burt is a Bear.",
  };


  constructor() {
    let reviews = [
      {
        "author": "Jason",
        "profile": "assets/img/user.png",
        "rating": "",
        "details": "I was in Chicago for a little over 24 hrs so I asked the people at the hotel front desk to recommend a place to go.  They suggested getting Chicago deep dish pizza and Giordano's was pretty near by.  My co worker and I ended up getting bruschetta  and small special deep dish pizza (sausage, bell peppers and onions).",
      },
      
    ];

    for (let review of reviews) {
      this.reviews.push(new Item(review));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.reviews;
    }

    return this.reviews.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.reviews.push(item);
  }

  delete(item: Item) {
    this.reviews.splice(this.reviews.indexOf(item), 1);
  }
}
