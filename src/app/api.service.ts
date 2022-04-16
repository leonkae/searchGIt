import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiInterface} from './api-interface';


interface userInterface{
  name:string;
  username:string;
  email:string;
  id:string;
}

@Injectable({
  providedIn: 'root',
})
export class APIService {
  user = 'leonkae';
  GH_API = `https://api.github.com/users/${this.user}`;
  GH_API_URL = 'https://api.github.com';
  BASEREPO_URL: string = `https://api.github.com/users/${this.user}/repos`;
  BASE_URL: string = '';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<ApiInterface[]> {
    return this.http.get<ApiInterface[]>(this.BASE_URL + '');
  }

  getGithubUser(): Observable<any> {
    return this.http.get<any>(this.GH_API);
  }

  getUserRepo(): Observable<any> {
    return this.http.get(this.BASEREPO_URL);
  }

  getSpecificUser(userName:string): Observable<any> {
    return this.http.get<any>(`${this.GH_API_URL}/users/${userName}`);
  }

  getRepositories(): Observable<ApiInterface> {
    return this.http.get<ApiInterface>(`${this.BASE_URL}/''`);
  }

  getFetchRepositories(userName:string):Observable<any[]>{
  return this.http.get<any[]>(`${this.GH_API_URL}/users/${userName}/repos`);
    
  }
}
