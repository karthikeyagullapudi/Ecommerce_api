import mongoose, { Schema } from "mongoose";

const UsersSchema = new Schema(
    {
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
        discount: {
            type: Number,
            required: true,
        },
        coupon: {
            type: String,
            required: true,
        },
        warranty: {
            type: String,
            required: true,
        },
        images: {
            type: String,
            required: true,
        },
        colors: {
            type: String,
            required: true,
        },
        specifications: {
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
export default mongoose.model("usersSchema", UsersSchema);
