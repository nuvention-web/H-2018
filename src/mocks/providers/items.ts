import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Lou Malnatis",
        "profilePic": "assets/img/catering-pizza-large.jpg",
        "about": "Allergy info: EGG  MILK SOY	WHEAT	ONION	GARLIC CORN NUTS",
        "allergy_sheet": "assets/img/sheet.png",
        "data": "lous"
      },
      {
        "name": "Chipotle",
        "profilePic": "https://d5bzqyuki558t.cloudfront.net/cms-assets/system/asset_versions/attachments/000/000/289/original/_0000_Burrito.png?1428413134",
        "about": "Allergy info: EGG  MILK SOY	WHEAT	ONION	GARLIC CORN NUTS",
        "allergy_sheet": "assets/img/sheet2.png",
        "data": "chipotle"
      },
     
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
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
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
