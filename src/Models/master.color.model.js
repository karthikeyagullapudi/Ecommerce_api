import mongoose, { Schema } from "mongoose";

const color = new Schema({
  color: {
    type: String,
    required: true,
  },
});

export default mongoose.model("color", color);
