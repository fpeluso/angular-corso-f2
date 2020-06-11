import { SessionService } from './../session.service';
import { ItemsInCart } from './../interfaces/itemsInCart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scontrino',
  templateUrl: './scontrino.component.html',
  styleUrls: ['./scontrino.component.css']
})
export class ScontrinoComponent implements OnInit {

  cart: Array<ItemsInCart> = []

  modifyQuantity: number;

  constructor(private cartService: SessionService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart)
  }

  delProduct(i: number) {
    this.cart.splice(i, 1);
  }

  edit(i: number) {
    this.modifyQuantity = this.cart[i].quantity;
    this.cart[i].isQuantityEdit = true;
  }

  cancelModify(i: number): void {
    this.cart[i].isQuantityEdit = false;
  }

  confirmModify(i: number): void {
    this.cart[i].quantity = this.modifyQuantity;
    this.cart[i].isQuantityEdit = false;
    this.modifyQuantity = undefined
  }
}
