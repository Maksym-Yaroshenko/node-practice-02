// src/index.js

import { startServer } from "./server.js";
startServer();

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
