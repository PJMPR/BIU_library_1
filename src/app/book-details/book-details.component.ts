import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../booklist/bookModel'
import { ActivatedRoute } from '@angular/router';
import { BooklistComponent } from '../booklist/booklist.component';
import { BookService } from '../services/book-service';
import { HeaderModel } from '../header/HeaderModel';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  

  bookList = new BookService().model;
  model: BookModel;
  bookId:number;
  @Output('updateCart') updateCart = new EventEmitter();

  addToCart() {
    var list:BookModel[] = JSON.parse(localStorage.getItem('bookList'))
    if(list === null)
      list = [];
    list.push(this.model);

    localStorage.setItem('inCart', JSON.stringify(list.length));
    localStorage.setItem('bookList',JSON.stringify(list));

    this.updateCart.emit({
      value: list.length
    })

  }

  ngOnInit() {
    this.route.params.subscribe(
      param=>{
        console.log(param.bookid);
         this.bookId = param.bookid;
        this.model = this.bookList.find(x=> x.id == this.bookId);
      })
  }

}
