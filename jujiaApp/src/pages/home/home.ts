import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
import { APage } from '../a/a';
import { HttpClient } from '@angular/common/http' //
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  //这里是类 只能声明属性和方法 函数不要在这里写
  // @ViewChild('ac') ac;
  // icons:String="camera";
  // items=[];
  isActive = 0;
  isClick(i){
    this.isActive = i;
  }
  arr=['推荐','家居','餐具','床上用品'];
  constructor(public http:HttpClient,public navCtrl: NavController) {  //
  // for (let i = 0; i < 30; i++) {   //循环列表
  //   this.items.push( this.items.length );
  // }
  // }
  // goSub(){
  //  this.navCtrl.push(BPage);   //堆栈 跳转到下一页堆一个  上一页
  //  //this.navCtrl.push(APage,{id:1});
  // }
  // ionViewDidLoad(){
  //   this.ac.get();   //a组件的方法
  // }
  
  // // doInfinite(infiniteScroll) {
  // //   this.http.get('/api/courses').subscribe(data=>{  //返回可观察的对象 后面是订阅
  // //     console.log(data);
  // //   })
  // //   setTimeout(() => {
  // //     for (let i = 0; i < 30; i++) {
  // //       this.items.push( this.items.length );
  // //     }
  // //     infiniteScroll.complete();
  // //     if(this.items.length>90){
  // //       infiniteScroll.enable();  //不再调用
  // //     }
  // //   }, 500);
  //    doRefresh(refresher) {
  //   console.log('Begin async operation', refresher);

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     refresher.complete();
  //   }, 2000);
  }

  
}
