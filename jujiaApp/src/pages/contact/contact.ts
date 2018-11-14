import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { AddPage } from '../add/add';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {

  }
  ionViewLoad(){
    let prorlrMomg = this.modalCtrl.create(AddPage);
    prorlrMomg.present();
  }

}
