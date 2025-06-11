import mongoose, { Schema } from "mongoose";

const subCategory = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("subCategory", subCategory);
