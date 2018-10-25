import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormControl} from '@angular/forms';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  notifications;
  notifyForm;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.notifyForm = new FormGroup({
      "notifications": new FormControl({value: 'weekly', disabled: false})
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  doSubmit(event) {
    console.log('Submitting form', this.notifyForm.value);
    event.preventDefault();
  }

}
