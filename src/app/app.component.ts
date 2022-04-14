import { Component } from '@angular/core';
import { Search } from './search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search:Search[] = [
    {id:1, name:'i am testing this out'}
  ]
}
