import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share/share.service';
import { Menu } from 'src/app/menu';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
 list:Menu[];
  constructor(private service:ShareService) { }

  ngOnInit() {
    this.service.getMenus().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        } as Menu;
        })

    });
  }

}
