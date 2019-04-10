import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { AppRoutingModule } from './app-routing.routing';
import { LongComponent } from './long/long.component';

@NgModule({
   declarations: [
      AppComponent,
      DictionaryComponent,
      TimelinesComponent,
      LongComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
