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

}

  name = 'Angular ' + VERSION.major;
}
