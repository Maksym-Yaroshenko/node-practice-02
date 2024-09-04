import mongoose from "mongoose";
import { UserModels, SessionsModels } from "../models/userModel.js";
import {
  CreatedUser,
  getAllUser,
  UserModelsFindById,
} from "../services/user.js";
import createHttpError from "http-errors";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";

export const fullNameUsers = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);

  const { sortOrder, sortBy } = parseSortParams(req.query);

  const user = await getAllUser(page, perPage, sortOrder, sortBy);

  if (!user.hasNextPage) {
    return next(createHttpError(404, "Page Not Found"));
  }

  res.send({
    status: 200,
    message: "Successfully found users!",
    data: user,
  });
};

export const oneNameUser = async (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(createHttpError(500, "Invalid contact ID format"));
  }

  const oneUser = await UserModelsFindById(userId);

  if (!oneUser) {
    throw createHttpError(404, "User not found");
  }

  res.send({
    status: 200,
    message: `Successfully found contact with id ${userId}!`,
    data: oneUser,
  });
  // next();
};

export const createUserController = async (req, res, next) => {
  const user = await CreatedUser(req.body);

  console.log(user);

  res.status(201).send({
    status: 201,
    message: "Successfully created a contact!",
    data: user,
  });
};
