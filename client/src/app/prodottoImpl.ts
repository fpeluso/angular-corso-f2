import { Prodotto } from './interfaces/prodotto';
export class ProdottoImpl implements Prodotto {
    _id: { $oid: string };
    nome: string;
    descrizione: string;
    prezzo: number;
    quantita: number;
    quantity?: number;
}