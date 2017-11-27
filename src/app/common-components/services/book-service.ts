import { Injectable } from "@angular/core";
import { BookModel } from "../../book-components/booklist/bookModel";


export class BookService{
  
       public model: BookModel[] = [new BookModel(1,'https://i.imgur.com/bKmWKrZ.jpg','Ruiny Gorlanu','Sowa',['Andrzej Podsiadło','Andrzej Duda'],10),
       new BookModel(2,'http://ecsmedia.pl/c/zwiadowcy-ksiega-2-plonacy-most-b-iext41780075.jpg','Ruiny Gorlanu','Sowa',['Andrzej Podsiadło','Andrzej Duda'],10)];       
}