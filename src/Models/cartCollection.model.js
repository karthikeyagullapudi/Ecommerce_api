import mongoose, { Schema } from "mongoose";

const CartCollection = new Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    discountPrice: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    discount: {
        type: String,
        required: true,
    },
});

export default mongoose.model("CartCollection", CartCollection);
