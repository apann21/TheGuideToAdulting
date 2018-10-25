import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  //placeholder for locally-saved articles; need to figure out way to create Article object where the Article itself has an assigned topic icon, link, date of addition
  //and title. For now, it's just title.
  items = [
    'Sample Article A',
    'Sample Article B',
    'Sample Article C',
    'Sample Article D',
    'Sample Article E',
    'Sample Article F',
    'Sample Article G',
    'Sample Article H',
    ];

  constructor(public navCtrl: NavController) {

  }
  
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }


}
