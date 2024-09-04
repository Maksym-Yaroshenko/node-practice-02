import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const sessionsSchema = new mongoose.Schema({
  user_id: { type: String },
  jwt: { type: String },
});

const UserModels = mongoose.model("User", usersSchema);
const SessionsModels = mongoose.model("Sessions", sessionsSchema);

export { UserModels, SessionsModels };
