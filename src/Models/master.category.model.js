import mongoose, { Schema } from "mongoose";

const category = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("category", category);
