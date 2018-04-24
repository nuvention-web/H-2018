import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];


  constructor() {
    let items = [
      {
        "name": "Lou Malnati's",
        "profilePic": "assets/img/catering-pizza-large.jpg",
        "about": "Family-owned local chain for Italian classics & Chicago-style, deep-dish pizzas with butter crusts.",
        "data": "lous",
        "address":"1850 Sherman Ave, Evanston, IL 60201"
      },
      {
        "name": "Chipotle",
        "profilePic": "https://cdn.worldvectorlogo.com/logos/chipotle-mexican-grill.svg",
        "about": "Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.",
        "data": "chipotle",
        "address": "711 Church St, Evanston, IL 60201"
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
