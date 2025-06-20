import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSignup = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSignup.pre("save", async function (next) {
    if (!this.isModified("password")){
        return next();
    };
  
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (error) {
      return next(error);
    }
  });

export default model("userSignup", userSignup);


