import { Component, ViewChild } from '@angular/core';
import { NavController, Slide, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;//后注入的
  constructor(public navCtrl: NavController) {
  }
 ionViewDidLoad() { //生命周期 数据初始化
  }
  change(){
    console.log( this.slides.getActiveIndex() );
  }
}
