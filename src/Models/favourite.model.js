import mongoose, { Schema } from "mongoose";

const FavoriteSchema = new Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        productName: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discountPrice: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Favorite", FavoriteSchema);
