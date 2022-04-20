import { Component, OnInit } from '@angular/core';
import { ApiInterface } from '../api-interface';
import { APIService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: ApiInterface[] = [];
  constructor(private userService: APIService) {

   }


  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      // (data) => {console.log(data)}
      data => {
        this.users = data
        // console.log(this.users)
      }
    )
  }
}

// fetch(url).then(resp => resp.json()).then(data => console.log(data))
