import mongoose from "mongoose";

import { env } from "../utils/env.js";

export const initMongoDB = async () => {
  try {
    const user = env("MONGODB_USER");
    const password = env("MONGODB_PASSWORD");
    const url = env("MONGODB_URL");
    const db = env("MONGODB_DB");

    //   mongodb+srv://yaroshenkomax:2uFtGHJsVn5th5j@cluster0.84qzi.mongodb.net/?retryWrites=true&w=majority&appName= Cluster0
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Mongo connection successfully established!");
  } catch (error) {
    "Error while setting up mongo connection", error;
    throw error;
  }
};
