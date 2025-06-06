import mongoose, { Schema } from "mongoose";

<<<<<<< HEAD:src/Models/users.model.js
const UsersSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
=======
const ProductSchema = new Schema(
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
        images1: {
            type: String,
            required: true,
        },
        images2: {
            type: String,
            required: true,
        },
        images3: {
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
>>>>>>> cb5a95500679bc30c5af8c07e4114d1644a02838:src/Models/product.model.js
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
    file: {
      type: String,
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
export default mongoose.model("productSchema", ProductSchema);
