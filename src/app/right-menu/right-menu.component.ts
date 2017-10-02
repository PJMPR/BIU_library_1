import {
  Component,
  OnInit
} from '@angular/core';
import {Category} from './category';

@Component({
  selector: 'right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  public model = {
    listOfCategories: [new Category("Akcja", ["a1","b1","c1"]),
      new Category("Fantasy", ["a2", "b2", "c2"]),
      new Category("Kryminał", ["a3", "b3", "c3"])
    ]
  };

  constructor() {}

  ngOnInit() {}

}
