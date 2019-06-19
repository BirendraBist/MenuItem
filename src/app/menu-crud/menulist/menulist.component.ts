import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share/share.service';
import { Menu } from 'src/app/menu';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  list: Menu[];
  constructor(private service: ShareService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }
  menuDoc: AngularFirestoreDocument<Menu>;
  menuCol: AngularFirestoreCollection<Menu>;
  menus: any;
  menu: Observable<Menu>;

  ngOnInit() {
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
  onUpdate(mns: Menu) {
    this.service.formData = Object.assign({}, mns);
  }

  getMenus(id) {
    this.menuDoc = this.firestore.doc('menus/' + id);
    this.menu = this.menuDoc.valueChanges();
  }
  onDelete(id) {
    if (confirm("Are you sure to delete this record ?")) {
      this.firestore.collection('menus').doc(id).delete();
      
    }
    else {
      return false;
    }
  }
}
