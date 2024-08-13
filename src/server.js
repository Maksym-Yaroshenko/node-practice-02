import express from "express";
import pino from "pino-http";
import cors from "cors";

// import dotenv from "dotenv";
// dotenv.config();
// const PORT = Number(process.env.PORT);

import { env } from "./utils/env.js";

const PORT = env("PORT", "3000");

export const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.get("/", (req, res, next) => {
    res.json({ message: "Hello World!" });
  });

  app.use("*", (req, res, next) => {
    res.status(404).json({ message: "Not found!" });
  });

  app.use((err, req, res, next) => {
    app.status(500).json({
      message: "Something went wrong",
      err: err.message,
      errName: err.name,
      errStack: err.stack,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is run`);
  });
};
