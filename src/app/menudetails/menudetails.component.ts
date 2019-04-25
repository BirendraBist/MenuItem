import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuService} from '../menu.service';
import{Menu} from '../menu';


@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent implements OnInit {
  @Input() menu:Menu;

  constructor(
    private route:ActivatedRoute,
    private MenuService:MenuService,
  
  ) { }

  getMenu():void{
const id= + this.route.snapshot.paramMap.get('id');
this.MenuService.getMenu(id).subscribe(menu=>this.menu=menu);
  }

  ngOnInit():void {
    this.getMenu();
  }

}
