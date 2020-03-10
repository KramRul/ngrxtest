import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'my-counter', pathMatch: 'full' },
  {
    path: '', loadChildren:
    () => import('./my-counter/my-counter.module').then(mod => mod.MyCounterModule)
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
