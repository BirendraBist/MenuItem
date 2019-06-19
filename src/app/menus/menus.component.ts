import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { ShareService } from '../share/share.service';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  itemid;
  list: Menu[];
  constructor(private service: ShareService,
  private firestore: AngularFirestore, private route: ActivatedRoute ) { }
  menuDoc: AngularFirestoreDocument<Menu>;
  menuCol: AngularFirestoreCollection<Menu>;
  menus: any;
  menu: Observable<Menu>;

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.itemid = params.itemid
    });
    this.menuCol = this.firestore.collection('menus');
    this.menus = this.menuCol.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Menu;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
   
  }

  getMenus(id) {
    this.menuDoc = this.firestore.doc('menus/' + id);
    this.menu = this.menuDoc.valueChanges();
  }

}
