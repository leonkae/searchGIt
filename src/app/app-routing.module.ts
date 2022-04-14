import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search-form/search-form.component';
// import { pathToFileURL } from 'url';
const routes: Routes = [
  // {path: '' ,component: MyProfileComponent},
  {path: 'search', component:SearchComponent},
  {path: 'myProfile' ,component:MyProfileComponent},
  {path: 'NotFoundComponent', component:NotFoundComponent},
  {path: 'searchform', component:SearchFormComponent},

  {path: '', redirectTo:"/search", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
