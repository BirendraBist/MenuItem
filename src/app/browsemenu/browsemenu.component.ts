import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-browsemenu',
  templateUrl: './browsemenu.component.html',
  styleUrls: ['./browsemenu.component.css']
})
export class BrowsemenuComponent implements OnInit {
  menus:Menu[]=[];
  menu1:Menu[]=[];
  menu2:Menu[]=[];

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.getTop();
    this.getWeek();
    this.getHighlight();
    
  }

  getTop():void {
    this.menuService.getMenus().subscribe(menus=>this.menus=menus.slice(1,4));
  }
  getWeek():void {
    this.menuService.getMenus().subscribe(menu1=>this.menu1=menu1.slice(5,9));

  }
  getHighlight():void{
    this.menuService.getMenus().subscribe(menu2=>this.menu2=menu2.slice(10,14));

  }

}
