import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const isValidId = (req, res, next) => {
  const { userId } = req.params;

  if (!isValidObjectId(userId)) {
    return next(createHttpError(400, "Bad Request"));
  }
};
