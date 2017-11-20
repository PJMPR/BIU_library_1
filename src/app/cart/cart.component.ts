import { Component, OnInit } from '@angular/core';
import { BookModel } from '../booklist/bookModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  booklist1=[
    {title:"Ruiny Gorlanu"},
    {title:"Płonący Most"},
    {title:"Ziemia Skuta Lodem"},
    {title:"Bitwa o Skandię"},
    {title:"Czarnoksiężnik z Północy"}
  ]

  constructor(private route: ActivatedRoute) { }
  model:BookModel = new BookModel(1,
  'https://i.imgur.com/bKmWKrZ.jpg',
  'KS tytul','Sowa',['Andrzej Podsiadło','Andrzej Duda'],10);
  
    ngOnInit() {
      console.log("dzialaxxx");
      this.route.params.subscribe(param=>console.log(param.bookid));
    }

onItemDeleted(index: number){
  console.log("dziala");
  this.booklist1.splice(index, 1);
}

}
