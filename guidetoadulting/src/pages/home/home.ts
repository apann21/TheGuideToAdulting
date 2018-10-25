import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinancialPage } from '../financial/financial';
import { SettingsPage } from '../settings/settings';
import { CookPage } from '../cook/cook';
import { HealthPage } from '../health/health';
import { EverydayPage } from '../everyday/everyday';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

goToFinancialPage(){
  this.navCtrl.push(FinancialPage)
}

goToCookingPage(){
  this.navCtrl.push(CookPage)
}
goToHealthPage(){
  this.navCtrl.push(HealthPage)
}
goToEverydayPage(){
  this.navCtrl.push(EverydayPage)
}
goToEmergencyPage(){
  this.navCtrl.push(EmergencyPage)
}

goToSettingsPage(){
  this.navCtrl.push(SettingsPage)
}


}
