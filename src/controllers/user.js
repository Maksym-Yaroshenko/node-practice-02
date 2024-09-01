import mongoose from "mongoose";
import { UserModels, SessionsModels } from "../models/userModel.js";
import { userModelsFind, UserModelsFindById } from "../services/user.js";
import createHttpError from "http-errors";
// export const fullNameUsers = async (req, res, next) => {
//   try {
//     const users = await UserModels.find();
//     // const sessions = await SessionsModels.find();

//     console.log(sessions);
//     res.send({
//       status: 200,
//       message: "Successfully found users!",
//       data_users: users,
//       //   data_sessions: sessions,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Something went wrong");
//   }
// };

// export const oneNameUser = async (req, res, next) => {
//   try {
//     const { userId } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       return res.status(400).send({ message: "Invalid contact ID format" });
//     }

//     const oneUser = await UserModels.findById(userId);
//     // console.log(oneUser);

//     // if (oneUser === null) {
//     //   return res.status(404).send({
//     //     message: "Contact not found",
//     //   });
//     // }

//     if (!oneUser) {
//       return next(new Error("Student not found"));
//     }

//     res.send({
//       status: 200,
//       message: `Successfully found contact with id ${userId}!`,
//       data: oneUser,
//     });
//     // next();
//   } catch (error) {
//     // console.error(error);
//     // res.status(500).send("Something went wrong");
//     next(error);
//   }
// };

export const fullNameUsers = async (req, res, next) => {
  const user = await userModelsFind();

  res.send({
    status: 200,
    message: "Successfully found users!",
    data: user,
  });
};

export const oneNameUser = async (req, res, next) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    // return res.status(400).send({ message: "Invalid contact ID format" });
    throw createHttpError(500, "Invalid contact ID format");
  }

  const oneUser = await UserModelsFindById(userId);
  // console.log(oneUser);

  // if (oneUser === null) {
  //   return res.status(404).send({
  //     message: "Contact not found",
  //   });
  // }

  if (!oneUser) {
    // return next(new Error("Student not found"));
    throw createHttpError(404, "User not found");
  }

  res.send({
    status: 200,
    message: `Successfully found contact with id ${userId}!`,
    data: oneUser,
  });
  // next();
};

export const createUserController = async (req, res, next) => {};
