import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Reviews } from '../../providers/providers';



@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
 

  cardItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public reviews: Reviews, public modalCtrl: ModalController) {
    this.cardItems = this.items.query();
  }

  openItem(item: Item) {
    this.navCtrl.push('CardDetailPage', {
      item: item
    });
  }

 

}