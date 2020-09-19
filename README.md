# angular-corso-f2
this repository contains random material from an Angular course

inside server folder run
deno run --allow-write --allow-read --allow-plugin --allow-net --unstable .\server.ts

It is a simple e-commerce website without the security and payment modules. The following functionalities are already implemented:
an admin panel to manage inventory;
a catalogue where clients can see products and add them to cart;
a cart/payment page where you can still change your order before payment;

All datas were stored in a local MongoDB docker container; Access to data is possibile using endpoint provided by the server application developed with Deno and Oak.
