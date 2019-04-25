import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { RatingComponent } from './rating/rating.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';
import { BrowsemenuComponent } from './browsemenu/browsemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    RatingComponent,
    MenudetailsComponent,
    BrowsemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
