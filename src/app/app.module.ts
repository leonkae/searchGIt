import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
// import { SearchServiceService } from './search-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { APIService } from './api.service';
import { UsersComponent } from './users/users.component';
import { GhUsersComponent } from './gh-users/gh-users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDetailComponent,
    NavbarComponent,
    NotFoundComponent,
    MyProfileComponent,
    SearchFormComponent,
    UsersComponent,
    GhUsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [APIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
