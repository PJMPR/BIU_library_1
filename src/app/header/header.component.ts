import { Component, OnInit } from '@angular/core';
import { HeaderModel } from './HeaderModel';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CartService] 
})
export class HeaderComponent implements OnInit {

public model = new HeaderModel("s13900", 5, 0);
numberOfItemsInCart:number = 0;

constructor(private cartService:CartService) {}

  ngOnInit() {
    this.cartService.getItemInCartList().subscribe(next => {
      this.numberOfItemsInCart = next.slice().length;
    })
  }

}
