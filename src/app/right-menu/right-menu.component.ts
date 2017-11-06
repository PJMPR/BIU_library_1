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
    listOfCategories: [
      new Category("Książki", ["Wszystkie","Akcja","Dramat"]),
      new Category("Wyszukiwarka", ["Zaawansowane wyszukiwanie"]),
      new Category("Panel użytkownika", ["Dodaj książkę", "Zaloguj", "Koszyk", "Poczta"])
    ]
  };

  constructor() {}

  ngOnInit() {}

}
