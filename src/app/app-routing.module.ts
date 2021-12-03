import{NgModule}from '@angular/core'; 
import{RouterModule,Routes}from '@angular/router'; 
import { AppComponent } from './app.component';
import { Bammm1Component } from './bammm1/bammm1.component';
import { Bammm2Component } from './bammm2/bammm2.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'bammm1', component: Bammm1Component},
  {path: 'bammm2', component: Bammm2Component},
];