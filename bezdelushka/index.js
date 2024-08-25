import express from "express";
import cors from "cors";
import pino from "pino-http";

const app = express();
// console.log(cors.toString());

app.use(
  pino({
    transport: {
      target: "pino-pretty",
    },
  })
);

app.use(cors());

app.get("/movies", (req, res) => {
  res.send([
    { title: "Film 1", year: 2023 },
    { title: "Film 2", year: 2018 },
    { title: "Film 3", year: 2020 },
  ]);
});

app.listen(8181, () => {
  console.log("Server is runing port 8181");
});
