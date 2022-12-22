import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrungModule } from 'trung';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TrungModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
