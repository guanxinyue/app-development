import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';  //引入Input模块

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() arr:Array<number>;//数组从父组件中传过来 所以用到装饰器函数Input   如果import中没引入 Input会报错 点一下Input左侧出现一个小灯泡 点击引入
  @Output() delIndex = new EventEmitter();// 事件发射器 发射到父模板子组件的组件类绑定这个事件到到父组件的模板
  del(i){   //传i到父组件 模板事件绑定到组件类 所以在组件类写事件
    this.delIndex.emit(i);
  }
  ngOnInit() {
  }

}
