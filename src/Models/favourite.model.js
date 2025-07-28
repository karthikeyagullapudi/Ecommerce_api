import mongoose, { Schema } from "mongoose";

const FavoriteSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        productId: {
            type: String,
            ref: "productSchema",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Favorite", FavoriteSchema);
