import mongoose from "mongoose";
import { UserModels, SessionsModels } from "../models/userModel.js";
import createHttpError from "http-errors";

export const userModelsFind = () => {
  const user = UserModels.find();
  return user;
};

export const UserModelsFindById = (userId) => {
  return UserModels.findById(userId);
};
