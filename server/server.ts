import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import routes from "./routes.ts";

const port = 8000;

const app = new Application();

app.use(
  oakCors({
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200
  }),
);
app.use(routes.routes());
app.use(routes.allowedMethods());

console.log(`Listening on port ${port}...`);

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});


await app.listen({ port: 8000 });
