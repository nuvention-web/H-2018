import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];


  constructor() {
    let items = [
      {
        "name": "Lou Malnati's",
        "profilePic": "https://www.loumalnatis.com/filebin/images/about-pizza-body-large.jpg",
        "about": "Family-owned chain for Italian classics & Chicago-style, deep-dish pizzas with butter crusts.",
        "data": "lous",
        "address":"1850 Sherman Ave, Evanston, IL 60201",
        "lat": 42.0514654,
        "lng": -87.6820016,
        "index": 0,
        "number" : "tel:+18473285400"
      },
      {
        "name": "Chipotle",
        "profilePic": "https://preview.ibb.co/kFrhm7/chip.jpg",
        "about": "Fast-food chain offering Mexican fare, including design-your-own burritos, tacos & bowls.",
        "data": "chipotle",
        "address": "711 Church St, Evanston, IL 60201",
        "lat": 42.048613,
        "lng": -87.681222,
        "index": 1,
        "number": "tel:+18474253959"

      },
      {
        "name": "La Cocinita",
        "profilePic": "https://lacocinitafoodtruck.com/wp-content/uploads/2016/09/truckmenupic4.jpg",
        "about": "Eatery serving Venezuelan-inspired Latin American street food in a casual, contemporary space.",
        "data": "lacoc",
        "address": "1625 Chicago Ave, Evanston, IL 60201",
        "lat": 42.047046,
        "lng": -87.678949,
        "index": 2,
        "number": "tel:+18473321625"
      },
      {
        "name": "Dave's New Kitchen",
        "profilePic": "https://dailynorthwestern.com/wp-content/uploads/2017/01/DAVES_LeeksLim_WEB-900x600.jpg",
        "about": "Compact Italian eatery doling out housemade pizzas, pasta dishes & calzones in a cozy setting.",
        "data": "daves",
        "address": "815 Noyes St, Evanston, IL 60201",
        "lat": 42.058594,
        "lng": -87.682534,
        "index": 3,
        "number": "tel:+18478646000"
      },
      {
        "name": "Aloha Poke",
        "profilePic": "https://pbs.twimg.com/media/C5yV-dIVMAAkmx6.jpg",
        "about": "Casual Hawaiian counter-serve spot for raw, cubed fish in rice bowls & salads with Asian flavors.",
        "data": "aloha",
        "address": "630 Davis St, Evanston, IL 60201",
        "lat": 42.046513,
        "lng": -87.681215,
        "index": 4,
        "number": "tel:+12249997298"
      },
      {
        "name": "Naf Naf Grill",
        "profilePic": "https://www.minneapolisnorthwest.com/images/made/images/remote/https_minneapolis-nw.s3.amazonaws.com/CMS/2279/naf_naf_600_400_50auto.jpg",
        "about": "Modern Middle Eastern counter-serve chain dishing up shawarma & falafel on pitas, rice or salads.",
        "data": "nafnaf",
        "address": "1629 Orrington Ave, Evanston, IL 60201",
        "lat": 42.047687,
        "lng": -87.680707,
        "index": 5,
        "number": "tel:+18478668470"
      },
      {
        "name": "Blaze Pizza",
        "profilePic": "https://image.ibb.co/kgE4Yn/blaze.jpg",
        "about": "Hip counter-serve pizzeria dishing up crispy, thin-crust pies made with creative toppings & sauces.",
        "data": "blaze",
        "address": "1737 Sherman Ave, Evanston, IL 60201",
        "lat": 42.049606,
        "lng": -87.681572,
        "index": 6,
        "number": "tel:+18472649263"
      },
      {
        "name": "Frontera Fresco",
        "profilePic": "https://www.rickbayless.com/wp-content/uploads/2015/05/RB.com_FrescoMenuItem_11.jpg",
        "about": "Quick-serve outpost offering market-driven Mexican favorites plus fruit juices.",
        "data": "frontera",
        "address": "1999 Campus Dr, Evanston, IL 60208",
        "lat": 42.053309,
        "lng": -87.672955,
        "index": 7,
        "number": "tel:+18474912300"
      },
      {
        "name": "Boltwood",
        "profilePic": "https://media2.fdncms.com/chicago/imager/a-salad-of-roasted-beets-spiced-pistachio/u/magnum/14472201/beetsgrapefruit-magnum.jpg",
        "about": "Stylishly simple, window-filled space for farm-to-table New American fare & craft cocktails.",
        "data": "boltwood",
        "address": "804 Davis St, Evanston, IL 60201",
        "lat": 42.046666,
        "lng": -87.682288,
        "index": 8,
        "number": "tel:+18478592880"
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
