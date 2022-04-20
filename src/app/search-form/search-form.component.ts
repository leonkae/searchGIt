import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from "../api.service"
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  user!:any 
  userName:string = ""
  repos:any = []

  constructor(private router: Router, private route: ActivatedRoute, private userService:APIService) {}

  

  // onKeyDownEVent(userName:any){
  //   this.router.navigate(['search-result'], {relativeTo:this.route});
  // }
  
  sendData(userName: string) {
    console.log(userName);
    this.userService.getSpecificUser(userName).subscribe(data => this.user = data )
    
  }
  getRepos(userName: string){
    this.userService
      .getFetchRepositories(userName)
      .subscribe((data) => (this.repos = data));

  }

  // constructor() { }

  ngOnInit(): void {}
}
