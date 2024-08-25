// src/index.js

import { startServer } from "./server.js";
import { initMongoDB } from "./db/initMongoDB.js";

const botstrap = async () => {
  try {
    await initMongoDB();
    startServer();
  } catch (error) {
    console.log(error);
  }
};

botstrap();

// import { MongoClient, ServerApiVersion } from "mongodb";
// const uri =
//   "mongodb+srv://yaroshenkomax:UIwEn9GGCbyuQf9x@cluster0.84qzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// console.log(startServer.toString());

// import express from "express";
// import pino from "pino-http";

// const PORT = 3000;

// const app = express();

// import crypto from "node:crypto";

// // console.log(crypto.randomUUID());

// // Middleware для логування часу запиту
// // app.use((req, res, next) => {
// //   console.log(`Time: ${new Date().toLocaleString()}`);
// //   next();
// // });

// app.use(
//   pino({
//     transport: {
//       target: "pino-pretty",
//     },
//   })
// );

// // Вбудований у express middleware для обробки (парсингу) JSON-даних у запитах
// // наприклад, у запитах POST або PATCH
// app.use(express.json());

// // Маршрут для обробки GET-запитів на '/'
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello, World!",
//     // res: res(),
//   });
// });

// app.use("*", (req, res, next) => {
//   //   console.log(res.status(404));
//   res.status(404).json({ message: "Not found" });
// });

// // Middleware для обробких помилок (приймає 4 аргументи)
// app.use((err, req, res, next) => {
//   //   console.log(err);
//   res.status(500).json({
//     message: "Something went wrong",
//     err: err.message,
//     errName: err.name,
//     errStack: err.stack,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
