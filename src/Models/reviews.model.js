import mongoose, { Schema } from "mongoose";

const ReviewsSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        productId: {
            type: String,
            required: true,
        },
        review: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            required: true,
        },

        status: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("reviewsSchema", ReviewsSchema);
