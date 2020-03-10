import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCounterRoutingModule } from './my-counter-routing.module';
import { MyCounterComponent } from './my-counter.component';


@NgModule({
  declarations: [MyCounterComponent],
  imports: [
    CommonModule,
    MyCounterRoutingModule
  ]
})
export class MyCounterModule { }
