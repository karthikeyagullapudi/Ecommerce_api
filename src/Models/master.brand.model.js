import mongoose, { Schema } from "mongoose";

const brand = new Schema({
  categoryId: {
    type: String,
    required: true,
  },
  subCategoryId: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

export default mongoose.model("brand", brand);
