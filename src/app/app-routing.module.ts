import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NewsDeyailsComponent } from './Components/news-deyails/news-deyails.component';
import { NewsComponent } from './Components/news/news.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'News',component:NewsComponent},
  {path:'login',component:LoginComponent},
  {path:'News/:ID',component:NewsDeyailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
