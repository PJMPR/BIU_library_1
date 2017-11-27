import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/bookModel';
import { ActivatedRoute } from '@angular/router';
import { CartService } from './cart.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {

  booklist1=[];

  constructor(private route: ActivatedRoute, private cartService:CartService) { }

  model:BookModel = new BookModel(1,
  'https://i.imgur.com/bKmWKrZ.jpg',
  'KS tytul','Sowa',['Andrzej Podsiadło','Andrzej Duda'],10);
  
    ngOnInit() {
      this.route.params.subscribe(param=>console.log(param.bookid));
      this.cartService.getItemInCartList().subscribe(next => {
        this.booklist1 = next;
      });
    }

onItemDeleted(index: number){
  this.cartService.removeItemFromCart(index);
}

}
