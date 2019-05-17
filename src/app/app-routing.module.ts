import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusComponent } from './menus/menus.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';
import { BrowsemenuComponent } from './browsemenu/browsemenu.component';
import { LoginComponent } from './login/login.component';
import{SignupComponent} from './signup/signup.component';
import { MenuCrudComponent } from './menu-crud/menu-crud.component';



const routes: Routes = [
  {path:'',redirectTo:'/menus',pathMatch:'full'},
  {path:'menus', component:MenusComponent},
  {path:'detail/:id',component:MenudetailsComponent},
  {path:'browsemenu',component:BrowsemenuComponent},
  {path:'login',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'login/:invalidLoginMessage',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'signup/invalidLoginMessage',component:SignupComponent}  ,
  {path:'menu-crud',component:MenuCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
