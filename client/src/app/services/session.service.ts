import { Injectable } from '@angular/core';
import { ItemsInCart } from '../interfaces/itemsInCart';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  globalCart: Array<ItemsInCart> = []
  constructor() { }

  public setCart(cart: Array<ItemsInCart>) {
    this.globalCart = JSON.parse(JSON.stringify(cart));

  }

  public getCart(): Array<ItemsInCart> {
    return this.globalCart;
  }
}
