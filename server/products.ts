import db from "./db.ts";

const productDb = db.collection("catalogue");

export interface Product {
  nome: string;
  descrizione: string;
  prezzo: number;
  quantita: number;
}

export const createProduct = async (
  context: any,
) => {
  try {
    const body: any = await context.request.body();
    if (!Object.keys(body).length) {
      context.response.body = { msg: `Request body can not be empty!` };
      context.response.status = 400;
      //return c.string("Request body can not be empty!", 400);
    }
    const { nome, descrizione, prezzo, quantita } = body.value;

    const id = await productDb.insertOne({
      nome,
      descrizione,
      prezzo,
      quantita,
    });

    context.response.body = id;
    context.response.status = 200;
  } catch (error) {
    context.response.body = { msg: `Error in insert` };
    context.response.status = 500;
  }
};

export const getProductList = async (
  context: any,
) => {
  try {
    // searching the db for a friend with the given id
    const data: any = await productDb.find();
    if (data) { // Response if friend is found
      context.response.body = data;
      context.response.status = 200;
    } else { // Response if no friend exits with the given id
      context.response.body = "not found";
      context.response.status = 204;
    }
  } // if some error occured while searching the db
  catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};

export const getProduct = async (
  context: any,
) => {
  try {
    // accessing the id of friend from the request params
    let id: string = context.params.id;

    // searching the db for a friend with the given id
    const data: any = await productDb.findOne({ _id: { "$oid": id } });
    if (data) { // Response if friend is found
      context.response.body = data;
      context.response.status = 200;
    } else { // Response if no friend exits with the given id
      context.response.body = "not found";
      context.response.status = 204;
    }
  } // if some error occured while searching the db
  catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};

export const updateProduct = async (
  context: any,
) => {
  try {
    // accessing the id of friend from the request params
    const id: string = context.params.id;
    // acessing data from the request body
    let body: any = await context.request.body();

    // creating the data object which has the updated values
    let data: {
      nome?: string;
      descrizione?: string;
      prezzo?: number;
      quantita?: number;
    } = {};
    if (body.value.nome) {
      data["nome"] = body.value.nome;
    }
    if (body.value.descrizione) {
      data["descrizione"] = body.value.descrizione;
    }
    if (body.value.prezzo) {
      data["prezzo"] = body.value.prezzo;
    }
    if (body.value.quantita) {
      data["quantita"] = body.value.quantita;
    }

    // Updating the database
    const result = await productDb.updateOne(
      { _id: { "$oid": id } },
      { $set: data },
    );

    // sending the response
    context.response.body = result;
    context.response.status = 200;
  } // if some error occured while updating
  catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};

export const deleteProduct = async (
  context: any,
) => {
  try {
    // accessing the id of friend from the request params
    let id: string = context.params.id;

    // deleting the friend with the given id from the db
    const result = await productDb.deleteOne({ _id: { "$oid": id } });
    /*
  * result = 0 : data not found
  * result = 1 : data found and deleted
  */
    // sending the response
    context.response.body = { result };
    context.response.status = 200;
  } // if some error occured while deletion
  catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};
