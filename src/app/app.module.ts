import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';   

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
