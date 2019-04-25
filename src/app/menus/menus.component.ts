import { Component, OnInit } from '@angular/core';
import{Menu} from '../menu';
import{MenuService} from '../menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus:Menu[];


  constructor( private menuService: MenuService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus():void{
    this.menuService.getMenus().subscribe(menus=>this.menus=menus)
  }

}
