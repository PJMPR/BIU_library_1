import {
  Component,
  OnInit
} from '@angular/core';
import {Category} from './category';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  public model = {
    listOfCategories: []
  };

  isBusy=false;

  constructor(private categoryService: CategoriesService) {}

  ngOnInit() {

    this.getCategories();
  }


  private getCategories() {
    this.isBusy=true;
    this.categoryService
      .getAllCategories()
      .subscribe(categories => {
        this.model.listOfCategories = categories;
        this.isBusy = false;
      });
  }
}
