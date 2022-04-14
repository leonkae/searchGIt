import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchServiceService } from './search-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SearchFormComponent } from './search-form/search-form.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDetailComponent,
    NavbarComponent,
    NotFoundComponent,
    MyProfileComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
