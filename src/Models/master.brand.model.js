import mongoose, { Schema } from "mongoose";

const brand = new Schema({
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

export default mongoose.model("brand", brand);
