import {
  Component,
  OnInit
} from '@angular/core';
import {Category} from './category';

@Component({
  selector: 'category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  public model = {
    listOfCategories: [
      new Category("Książki", ["Wszystkie","Akcja","Dramat"]),
      new Category("Wyszukiwarka", ["Zaawansowane wyszukiwanie"]),
      new Category("Panel użytkownika", ["Dodaj książkę", "Zaloguj", "Koszyk", "Poczta", "Dane personalne"])
    ]
  };

  constructor() {}

  ngOnInit() {}

}
