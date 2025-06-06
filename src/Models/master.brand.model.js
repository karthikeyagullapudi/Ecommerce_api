import mongoose, { Schema } from "mongoose";

const brand = new Schema({
  brand: {
    type: String,
    required: true,
  },
});

export default mongoose.model("brand", brand);
