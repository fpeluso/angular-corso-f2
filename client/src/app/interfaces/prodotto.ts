export interface Prodotto {
    _id: { $oid: string };
    nome: string;
    descrizione: string;
    prezzo: number;
    quantita: number;
    quantity?: number;
}