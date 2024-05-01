import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './Components/news/news.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsDeyailsComponent } from './Components/news-deyails/news-deyails.component';
import { PastPublicationDateFilterPipe } from './past-publication-date-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LoginComponent,
    NewsDeyailsComponent,
    PastPublicationDateFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
