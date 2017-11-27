import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx'
import { Observer } from 'rxjs/Observer';
import { BookModel } from '../booklist/bookModel';

@Injectable()
export class CartService {

private static cartSubject:BehaviorSubject<BookModel[]> = 
    new BehaviorSubject<BookModel[]>(
        (<BookModel[]>JSON.parse(localStorage.getItem('bookList')))||[]
    );

constructor() { }

public addNewItemToCart(item:BookModel) {

    var list:BookModel[] = JSON.parse(localStorage.getItem('bookList'))
    if(list === null)
      list = [];
    list.push(item);

    console.log(list);

    localStorage.setItem('bookList',JSON.stringify(list));
    CartService.cartSubject.next(list);

}

public removeItemFromCart(index:number) {

    var list:BookModel[] = JSON.parse(localStorage.getItem('bookList'))

    if(list === null)
        return;
    if(list.length === 0)
        return;

    list = list.slice(0,index).concat(list.slice(index+1));

    console.log(list);

    localStorage.setItem('bookList',JSON.stringify(list));
    CartService.cartSubject.next(list);

}

public getItemInCartList():BehaviorSubject<BookModel[]> {

    return CartService.cartSubject;

}

}

