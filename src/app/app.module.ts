import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { AccountModule } from './account/account.module';
import { metaReducers } from './shared/metareducers/metareducers';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/books.component.effects';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      StoreModule.forRoot({ count: counterReducer }, { metaReducers }),
      AccountModule,
      EffectsModule.forRoot([]),
      EffectsModule.forFeature([BookEffects])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
