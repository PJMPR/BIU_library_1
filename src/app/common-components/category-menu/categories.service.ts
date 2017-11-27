import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Injectable()
export class CategoriesService {

  constructor() { }

  public getAllCategories():Observable<Category[]>{
    let categories = [
      new Category("Książki", ["Wszystkie","Fantasy","Przygodowe"])
    ];
    return Observable.of(categories).delay(1000);
  }
}
