import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  public model = {
    listOfCategories: ['Akcja', 'Fantasy', 'Historyczne', 'Kryminał', 'Przygodowa'],
    action: "Akcja",
    fantasy: "Fantasy"

  };

  constructor() {}

  ngOnInit() {}

}
