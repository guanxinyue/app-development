import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { BrowserModule } from '@angular/platform-browser';  //添加app.module.ts里的模块
import {IonicModule} from 'ionic-angular';  //
@NgModule({
	declarations: [AComponent,
    BComponent],//自己引入
	imports: [
		BrowserModule,IonicModule.forRoot(ComponentsModule)//使ionic模块能作用与component模块中
	],
	exports: [AComponent,
    BComponent]
})
export class ComponentsModule {}
