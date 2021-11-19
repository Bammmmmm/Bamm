import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  a: string;
  b: string;

bamm(){
  this.b = this.a;
  this.a = "";

}

bamm2(){
  this.a = this.b;
  this.b = "";

}
  name = 'Angular ' + VERSION.major;
}
