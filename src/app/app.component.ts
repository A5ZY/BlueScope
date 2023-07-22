import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlueScope';
  constructor(){
    document.body.style.backgroundColor = '#0E6EFD';
  }
}
