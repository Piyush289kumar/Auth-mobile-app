import { model, Schema } from "mongoose";

const UserModel = Schema(
  {
    userName: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamp: true }
);

export const User = model("User", UserModel);
