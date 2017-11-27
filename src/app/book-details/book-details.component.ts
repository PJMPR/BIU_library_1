import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/bookModel'
import { ActivatedRoute } from '@angular/router';
import { BooklistComponent } from '../booklist/booklist.component';
import { BookService } from '../services/book-service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [CartService] 
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService:CartService) { }
  

  bookList = new BookService().model;
  model: BookModel;
  bookId:number;

  addToCart() {

    this.cartService.addNewItemToCart(this.model);

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
