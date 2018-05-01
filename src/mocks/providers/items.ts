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
        "address":"1850 Sherman Ave, Evanston, IL 60201",
        "lat": 42.0514654,
        "lng": -87.6820016,
      },
      {
        "name": "Chipotle",
        "profilePic": "https://cdn.worldvectorlogo.com/logos/chipotle-mexican-grill.svg",
        "about": "Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.",
        "data": "chipotle",
        "address": "711 Church St, Evanston, IL 60201",
        "lat": 42.048613,
        "lng": -87.681222
      },
      {
        "name": "La Cocinita",
        "profilePic": "https://s3-media3.fl.yelpcdn.com/bphoto/_Ra_Y7SYJLXHMeLTVDJ3Mg/348s.jpg",
        "about": "Eatery serving Venezuelan-inspired Latin American street food in a casual, contemporary space.",
        "data": "lacoc",
        "address": "1625 Chicago Ave, Evanston, IL 60201",
        "lat": 42.047046,
        "lng": -87.678949
      },
      {
        "name": "Dave's New Kitchen",
        "profilePic": "https://dailynorthwestern.com/wp-content/uploads/2017/01/DAVES_LeeksLim_WEB-900x600.jpg",
        "about": "Compact Italian eatery doling out housemade pizzas, pasta dishes & calzones in a cozy setting.",
        "data": "daves",
        "address": "815 Noyes St, Evanston, IL 60201",
        "lat": 42.058594,
        "lng": -87.682534
      },
      {
        "name": "Aloha Poke",
        "profilePic": "https://pbs.twimg.com/media/C5yV-dIVMAAkmx6.jpg",
        "about": "Casual Hawaiian counter-serve spot for raw, cubed fish in rice bowls & salads with Asian flavors.",
        "data": "aloha",
        "address": "630 Davis St, Evanston, IL 60201",
        "lat": 42.046513,
        "lng": -87.681215
      },
      {
        "name": "Naf Naf Grill",
        "profilePic": "https://www.qsrmagazine.com/sites/qsrmagazine.com/files/styles/story_page/public/story/one-watch-naf-naf-grill.jpg",
        "about": "Modern Middle Eastern counter-serve chain dishing up shawarma & falafel on pitas, rice or salads.",
        "data": "nafnaf",
        "address": "1629 Orrington Ave, Evanston, IL 60201",
        "lat": 42.047687,
        "lng": -87.680707
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
