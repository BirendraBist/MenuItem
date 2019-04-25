import { Injectable } from '@angular/core';
import{Observable, of} from 'rxjs';
import {Menu} from './menu';
import{MENUS} from './menulist';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
getMenus():Observable< Menu[]>{
  return of(MENUS);
}

getMenu(id:number):Observable<Menu>{
  return of (MENUS.find(menu=> menu.id===id));
}
  constructor() { }
}
