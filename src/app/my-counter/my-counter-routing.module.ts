import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './my-counter.component';


const routes: Routes = [
  { path: '', redirectTo: 'my-counter', pathMatch: 'full' },
  {
    path: 'my-counter', component: MyCounterComponent, children: [   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCounterRoutingModule { }
