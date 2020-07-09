import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,

  ],
  exports:[
    NgZorroAntdModule,
    CommonModule,
    FormsModule
  ]
})
export class ShareModule { }
