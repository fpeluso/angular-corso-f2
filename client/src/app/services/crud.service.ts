import { Prodotto } from '../interfaces/prodotto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  public getProductList() {
    return this.httpClient.get(`http://localhost:8000/prodotti`);
  }

  public getProduct(id: string) {
    return this.httpClient.get(`http://localhost:8000/prodotto/${id}`);
  }

  public createProduct(data: Prodotto) {
    return this.httpClient.post(`http://localhost:8000/prodotto/`, data);
  }

  public updateProduct(
    id: string,
    data: {
      nome?: string;
      descrizione?: string;
      prezzo?: number;
      quantita?: number;
    }
  ) {
    return this.httpClient.patch(`http://localhost:8000/prodotto/${id}`, data);
  }

  public deleteProduct(id: string) {
    return this.httpClient.delete(`http://localhost:8000/prodotto/${id}`);
  }

}
