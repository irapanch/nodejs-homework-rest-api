const { Schema, model } = require("mongoose");
const { emailRegexp } = require("../constants/constants");
const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
} = require("../schemas/users");
// const allowedSubscriptions = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      // match: /^\S+@\S+\.\S+$/,
      match: emailRegexp,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
const schemas = {
  registerSchema,
  loginSchema,
  subscriptionSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
