import mongoose, { Schema } from "mongoose";

const subsubCategory = new Schema({
  subsubCategory: {
    type: String,
    required: true,
  },
});

export default mongoose.model("subsubCategory", subsubCategory);
