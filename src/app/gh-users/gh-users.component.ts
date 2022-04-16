import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-gh-users',
  templateUrl: './gh-users.component.html',
  styleUrls: ['./gh-users.component.css'],
})
export class GhUsersComponent implements OnInit {
  user: any = {};
  userRepos!:any;

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.apiService.getGithubUser().subscribe((data) => {
      this.user = data;
      // console.log(this.user);
    });
     this.apiService.getUserRepo().subscribe(
       data => {
         this.userRepos = data
         console.log(this.userRepos)
        }

       );
  }
 
}
