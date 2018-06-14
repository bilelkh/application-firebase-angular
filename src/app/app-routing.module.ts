import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./components/login/login.component" ; 
import {RegisterComponent} from "./components/register/register.component" ; 
import {HomeComponent} from "./components/home/home.component" ; 
import {Routes,RouterModule} from '@angular/router';
import {EventsComponent} from "./components/events/events.component";
import {NavbarComponent} from "./components/navbar/navbar.component";



const routes: Routes = [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: RegisterComponent},
      {path: 'profile', component: HomeComponent, children:
         [{path: 'event', component: EventsComponent},
          {path: 'navbar', component: NavbarComponent}
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
