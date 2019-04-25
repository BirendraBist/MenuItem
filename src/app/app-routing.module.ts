import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';
import { BrowsemenuComponent } from './browsemenu/browsemenu.component';


const routes: Routes = [
  {path:'',redirectTo:'/menus',pathMatch:'full'},
  {path:'menus', component:MenusComponent},
  {path:'detail/:id',component:MenudetailsComponent},
  {path:'browsemenu',component:BrowsemenuComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
