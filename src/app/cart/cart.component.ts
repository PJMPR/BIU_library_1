import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/bookModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  booklist1=[]

  constructor(private route: ActivatedRoute) { }
  model:BookModel = new BookModel(1,
  'https://i.imgur.com/bKmWKrZ.jpg',
  'KS tytul','Sowa',['Andrzej Podsiadło','Andrzej Duda'],10);
  
    ngOnInit() {
      console.log("dzialaxxx");
      this.route.params.subscribe(param=>console.log(param.bookid));
      this.booklist1 = JSON.parse(localStorage.getItem('bookList'));
    }

onItemDeleted(index: number){
  console.log("dziala");
  this.booklist1.splice(index, 1);
  localStorage.setItem('bookList',JSON.stringify(this.booklist1));
  localStorage.setItem('inCart', JSON.stringify(this.booklist1.length));
}

}
