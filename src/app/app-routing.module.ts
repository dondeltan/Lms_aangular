import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { SearchBookComponent } from './search-book/search-book.component';


const routes: Routes = [
  {path : '' , component: LoginComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'searchBook/:name' , component: SearchBookComponent,canActivate:[RouteGuardService]},
  {path:'logout' , component:LogoutComponent,canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
