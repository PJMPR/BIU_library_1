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
    listOfCategories: [new Category("AKCJA", ["Assembler","Matematyka dyskretna","Tu nie wiem XD"]),
      new Category("FANTASY", ["Trójka z BIU", "Dotarcie do końca studiów", "Java"]),
      new Category("KRYMINAŁ", ["Robienie w PHP", "Mówienie czcionka na font", "Spaghetti Code"])
    ]
  };

  constructor() {}

  ngOnInit() {}

}
