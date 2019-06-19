import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ToastrModule } from 'ngx-toastr';
 import{AngularFireAuthModule} from 'angularfire2/auth';
 import{AngularFireDatabaseModule} from 'angularfire2/database';

import{AngularFireModule} from 'angularfire2';
 import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';

import { MenudetailsComponent } from './menudetails/menudetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import{AngularFirestoreModule} from 'angularfire2/firestore';
import { MenuCrudComponent } from './menu-crud/menu-crud.component';
import { MenuaddComponent } from './menu-crud/menuadd/menuadd.component';
import { MenulistComponent } from './menu-crud/menulist/menulist.component';
import { auth } from 'firebase';
import { AuthguardService } from './authguard.service';
import { LoginService } from './login.service';
export const firebaseConfig={
  apiKey: "AIzaSyDEQ_nPs6BJxljc26OznjInVChZ7a-sIz8",
  authDomain: "ecommerce-65d02.firebaseapp.com",
  databaseURL: "https://ecommerce-65d02.firebaseio.com",
  projectId: "ecommerce-65d02",
  storageBucket: "ecommerce-65d02.appspot.com",
  messagingSenderId: "727765126754",
  appId: "1:727765126754:web:0d921b32046e2a36"
};
@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    MenudetailsComponent,
     LoginComponent,
    SignupComponent,
    MenuCrudComponent,
    MenuaddComponent,
    MenulistComponent,
    
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule, 
    AngularFirestoreModule, 
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),      
    AngularFireModule.initializeApp(firebaseConfig),
         
        
  ],
  providers: [AuthguardService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
