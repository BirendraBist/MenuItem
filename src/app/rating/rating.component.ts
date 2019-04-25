import { Component, OnInit,Input } from '@angular/core';
import{MenuService} from '../menu.service';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers:[MenuService]
})
export class RatingComponent implements OnInit {
  @Input() rating=0;
  @Input() numOfReviews=0;

  onClick(ratingValue){
    this.rating=ratingValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
