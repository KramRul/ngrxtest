import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import * as userLoginReducer from './login/login.component.reducer';

@NgModule({
  declarations: [AccountComponent, LoginComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    StoreModule.forFeature(userLoginReducer.userLoginFeatureKey, userLoginReducer.reducer)
  ]
})
export class AccountModule { }
