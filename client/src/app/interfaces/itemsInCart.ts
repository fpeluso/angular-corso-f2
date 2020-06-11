import { ProdottoImpl } from './../prodottoImpl';
export interface ItemsInCart {
    item: ProdottoImpl;
    quantity: number;
    isQuantityEdit: boolean;
}