import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ShareService} from '../share/share.service';
import{Menu} from '../menu';

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.component.html',
  styleUrls: ['./menudetails.component.css']
})
export class MenudetailsComponent implements OnInit {
  itemid;
  constructor(
    private route:ActivatedRoute,
    private service: ShareService,) { }

    
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.itemid = params.itemid;  
    });
    
  }
  

}
