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
        "number" : "tel:+18473285400",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/lou-malnatis-pizzeria-evanston",
        "disclaimer" : "Our deep dish pizza dough and pizza sauce do not contain any egg or dairy (just so long as you do not order Buttercrust and specify that you do not want romano cheese sprinkled on top). "
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
        "number": "tel:+18474253959",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/chipotle-mexican-grill-evanston",
        "disclaimer": "Although we do not use eggs, mustard, peanuts, tree nuts, sesame, shellfish, or fish as ingredients in our food, Chipotle cannot guarantee the complete absence of these allergens in its restaurants."

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
        "number": "tel:+18473321625",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/la-cocinita-restaurant-evanston",
        "disclaimer" : "We need a heads up if someone has a contact allergy; there's a separate fryer that we can use if we know there's a severe allergy."
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
        "number": "tel:+18478646000",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/daves-new-kitchen-evanston",
        "disclaimer" : "We make bread in house so there is flour in the air."
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
        "number": "tel:+12249997298",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/aloha-poke-evanston",
        "disclaimer" : "This restaurant has no information to share."
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
        "number": "tel:+18478668470",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/naf-naf-grill-evanston-2",
        "disclaimer" : "Naf Naf Grill does not guarantee that cross-contact with allergens will not occur. "
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
        "number": "tel:+18472649263",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/blaze-fast-fired-pizza-evanston-2",
        "disclaimer" : "This restaurant has no information to share."
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
        "number": "tel:+18474912300",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/frontera-fresco-evanston",
        "disclaimer" : " While we take steps to minimize the risk of cross contamination, we cannot guarantee that any of our products are always safe to consume"
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
        "number": "tel:+18478592880",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/boltwood-evanston",
        "disclaimer" : "We make bread in house so there is flour in the air."
      },
      {
        "name": "Panera Bread",
        "profilePic": "https://www.panerabread.com/content/dam/panerabread/menu/catering-categories/misc/landingpage-3waystoorder-popularbundles.jpg",
        "about": "Counter-serve bakery/cafe chain serving sandwiches, salads & more, known for its bread & free WiFi.",
        "data": "panera",
        "address": "1700 Sherman Ave, Evanston, IL 60201",
        "lat": 42.048625,
        "lng": -87.682202,
        "index": 9,
        "number": "tel:+18477338356",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/panera-bread-evanston",
        "disclaimer" : "Please note that we cannot guarantee that any of our menu items are free of allergens because we use shared equipment and handle common allergens throughout our supply chain."
      },
      {
        "name": "Bat 17",
        "profilePic": "https://s3-media3.fl.yelpcdn.com/bphoto/m58LquN75z1TTsSzfcA0OA/o.jpg",
        "about": "Expansive sports bar offering sandwiches, booze, pool & more in a TV-adorned setting.",
        "data": "bat17",
        "address": "1709 Benson Ave, Evanston, IL 60201",
        "lat": 42.048831,
        "lng": -87.683107,
        "index": 10,
        "number": "tel:+18477337117",
        "percent": 0,
        "yelp": "https://www.yelp.com/biz/bat-17-evanston",
        "disclaimer" : "We take care not to cross contaminate and we use fresh pans and knives for orders with noted allergy issues."
      },
      {
        "name": "Heckey's Barbecue",
        "profilePic": "https://image.ibb.co/d1Cqa8/bensbbqthumb.png",
        "about": "Long-standing, popular spot for barbecue fare.",
        "data": "heckeys",
        "address": "1902 Green Bay Rd, Evanston, IL 60201",
        "index": 11,
        "number": "tel:+18474921182",
        "percent": "???",
        "yelp": "https://www.yelp.com/biz/heckys-barbecue-evanston",
        "fake": true,
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
