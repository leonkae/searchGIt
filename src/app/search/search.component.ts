import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchServiceService]
})
export class SearchComponent implements OnInit {

  search:Search[] = [
    {id:1, name:'testing this out'}
  ]

  // constructor(searchServiceService:SearchServiceService) { this.search = searchServiceService.getSearch()
  //  }

  ngOnInit(): void {
  }

}
