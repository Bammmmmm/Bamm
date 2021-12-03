import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Bammm1Component } from './bammm1/bammm1.component';
import { Bammm2Component } from './bammm2/bammm2.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, Bammm1Component, Bammm2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
