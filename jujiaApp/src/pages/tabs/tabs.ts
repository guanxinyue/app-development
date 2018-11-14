import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { BPage } from '../b/b';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular'
import { AddPage } from '../add/add'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = APage;
  tab5Root = BPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {

    
  }

  ionViewDidLoad(){
    if(document.querySelector('#tab-t0-2')){  //如果document.querySelector('#tab-t0-2')为真才执行下面的
      document.querySelector('#tab-t0-2').addEventListener('click',()=>{
          let profileModal = this.modalCtrl.create(AddPage);  //模态窗口没有返回按钮
          profileModal.present();
        },false);
      }
    }
}