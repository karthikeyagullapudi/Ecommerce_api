import mongoose, { Schema } from "mongoose";

const coupon = new Schema({
  coupon: {
    type: String,
    required: true,
  },
});

export default mongoose.model("coupon", coupon);
