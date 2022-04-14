// import { Input } from '@angular/core';
import { Component, OnInit, Input} from '@angular/core';
import { Search } from '../search';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  @Input() search:Search;


  constructor() { }

  ngOnInit(): void {
  }

}
