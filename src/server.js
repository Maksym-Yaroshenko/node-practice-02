import express from "express";
import pino from "pino-http";
import cors from "cors";

import usersRouter from "./routes/users.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";

// import dotenv from "dotenv";
// dotenv.config();
// const PORT = Number(process.env.PORT);

import { env } from "./utils/env.js";
import { parseNumber } from "./utils/parseNumber.js";
// console.log(env.length);

const PORT = env("PORT", "8080");

export const startServer = () => {
  const app = express();

  app.use(
    express.json({
      type: ["application/json", "application/vnd.api+json"],
      limit: "100kb",
    })
  );

  app.use(cors());

  // app.use(
  //   pino({
  //     transport: {
  //       target: "pino-pretty",
  //     },
  //   })
  // );

  app.get("/", (req, res, next) => {
    res.json({ message: "Hello World!" });
    const body = req.body;
    // console.log(body);

    const a = parseNumber("10", "15");

    // console.log(a);
  });

  // app.get("/users", fullNameUsers);

  app.use(usersRouter);

  app.use("*", notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is run PORT - ${PORT}`);
  });
};
