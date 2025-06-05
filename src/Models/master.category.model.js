import mongoose, { Schema } from "mongoose";

const category = new Schema({
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.model("category", category);
