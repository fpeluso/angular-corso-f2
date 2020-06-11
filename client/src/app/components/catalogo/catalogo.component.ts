import { SessionService } from './../../services/session.service';
import { CrudService } from './../../services/crud.service';
import { ItemsInCart } from './../../interfaces/itemsInCart';
import { ProdottoImpl } from './../../models/prodottoImpl';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  prodotto: ProdottoImpl = new ProdottoImpl();
  prodotti: Array<ProdottoImpl> = [];

  cartItem: ProdottoImpl = new ProdottoImpl();
  cartItems: Array<ItemsInCart> = [];

  itemIndex: number;
  quantity: number;
  modifyQuantity: number;

  constructor(private router: Router, private api: CrudService, private cartService: SessionService) { }

  ngOnInit(): void {
    this.api.getProductList().subscribe(data => {
      for (const d of (data as any)) {
        const resProd = { ...d }
        this.prodotti.push(resProd);
      }
    })
  }

  addProductToCart(i: number): void {
    let count = 0;
    this.cartItems.forEach(c => {
      if (c.item._id.$oid === this.prodotti[i]._id.$oid) {
        count++;
      }
    })
    if (count > 0) {
      //gestire messsaggio di errore
      console.log('errore')
    } else {
      let itemToAdd: ItemsInCart = { item: new ProdottoImpl(), quantity: 0, isQuantityEdit: false };
      itemToAdd.item = this.prodotti[i];
      itemToAdd.quantity = this.prodotti[i].quantity;
      this.cartItems.push({ ...itemToAdd });
      // this.quantity = undefined;
    }
  }

  removeProductFromCart(i: number): void {
    this.cartItems.splice(i, 1);
  }

  editProductInCart(i: number): void {
    this.modifyQuantity = this.cartItems[i].quantity;
    this.cartItems[i].isQuantityEdit = true;
  }

  cancelModify(i: number): void {
    this.cartItems[i].isQuantityEdit = false;
  }

  confirmModify(i: number): void {
    this.cartItems[i].quantity = this.modifyQuantity;
    this.cartItems[i].isQuantityEdit = false;
    this.modifyQuantity = undefined
  }

  getTotaleCarrello(): number {
    let tot: number = 0;
    this.cartItems.forEach(c => {
      tot += (c.item.prezzo * c.quantity);
    })
    return tot;
  }

  pagamento(): void {
    this.cartService.setCart(this.cartItems)
    this.router.navigateByUrl('/scontrino');
  }

}
