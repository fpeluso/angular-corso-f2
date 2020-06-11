import { Router } from "https://deno.land/x/oak/mod.ts";
import * as api from "./products.ts";

const routes = new Router();

routes.get("/public", (context) => {
  context.response.body = "welcome to public data!";
});
routes.get("/prodotti", api.getProductList);
routes.get("/prodotto/:id", api.getProduct);
routes.post("/prodotto", api.createProduct);
routes.patch("/prodotto/:id", api.updateProduct);
routes.delete("/prodotto/:id", api.deleteProduct);

export default routes;
