import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onKeyDownEVent(event:any){
    this.router.navigate(['search-result'], {relativeTo:this.route});
  }
  
  sendData(event: any) {
    console.log(event.target.value);
  }

  // constructor() { }

  ngOnInit(): void {}
}
