import mongoose from "mongoose";
import { UserModels, SessionsModels } from "../models/userModel.js";
import createHttpError from "http-errors";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";
import { SORT_ORDER } from "../constants/index.js";

export const getAllUser = async (
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = "_id"
) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const usersQuery = UserModels.find();

  // ------------------------------------------------------------------------

  // const usersCount = await UserModels.find().merge(usersQuery).countDocuments();

  // const user = await usersQuery
  //   .skip(skip)
  //   .limit(limit)
  //   .sort({ [sortBy]: sortOrder })
  //   .exec();

  // // const user = UserModels.find();

  // ------------------------------------------------------------------------

  const [usersCount, user] = await Promise.all([
    UserModels.find().merge(usersQuery).countDocuments(),
    usersQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(usersCount, page, perPage);
  // console.log(usersCount, page, perPage);

  return {
    data: user,
    ...paginationData,
  };
};

export const UserModelsFindById = (userId) => {
  return UserModels.findById(userId);
};

export const CreatedUser = (payload) => {
  return UserModels.create(payload);
};
