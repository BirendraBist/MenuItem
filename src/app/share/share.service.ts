import { Injectable } from '@angular/core';
import { Menu } from '../menu';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  formData :Menu;


  constructor(private firestore:AngularFirestore) { }
  getMenus(){
   return this.firestore.collection('menus').snapshotChanges(); //value changes function only retrive value from DB but snapshot retrive id of collection which will help to update
  }
}
