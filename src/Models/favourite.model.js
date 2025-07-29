import mongoose, { Schema } from "mongoose";

const FavoriteSchema = new Schema(
<<<<<<< HEAD
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
=======
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
>>>>>>> 8ee45361d33a19cb05da1cd49d0f6ac0d0c6fe19
    },

    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Favorite", FavoriteSchema);
