import Favorite from "../Models/favourite.model.js";
import { handleSucces, handleError } from "../Utils/errorHandle.js";
import asyncPromise from "../Utils/asyncHandle.js";

// ✅ Add to Favorites
const addToFavorites = asyncPromise(async (req, res) => {
    const { productId, productName, price, discountPrice } = req.body;

    const alreadyExists = await Favorite.findOne({ productId });
    if (alreadyExists) {
        return handleSucces(
            res,
            "Product already in favorites",
            200,
            alreadyExists
        );
    }

    const newFavorite = await Favorite.create({
        productId,
        productName,
        price,
        discountPrice,
    });

    return handleSucces(res, "Product added to favorites", 201, newFavorite);
});

// ✅ Remove from Favorites
const removeFromFavorites = asyncPromise(async (req, res) => {
    const { userId, productId } = req.body;

    const removed = await Favorite.deleteOne({ userId, productId });

    if (removed.deletedCount === 0) {
        return handleError(null, res, "Favorite not found", 404);
    }

    return handleSucces(res, "Product removed from favorites", 200, null);
});

// ✅ Get All Favorites by User
const getFavoritesByUser = asyncPromise(async (req, res) => {
    const { userId } = req.params;

    const favorites = await Favorite.find({ userId }).populate("productId");

    if (!favorites.length) {
        return handleError(null, res, "No favorites found", 404);
    }

    return handleSucces(res, "Favorites fetched successfully", 200, favorites);
});

// ✅ Get All Favorites (Admin)
const getAllFavorites = asyncPromise(async (req, res) => {
    const response = await Favorite.find();
    if (!response.length) {
        return handleError(null, res, "No CartCollection found", 404);
    }
    return handleSucces(
        res,
        "CartCollection fetched successfully",
        200,
        response
    );
});
const DeleteFavoritesItems = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(400).json({ message: "Product ID is required." });
        }
        const result = await Favorite.deleteOne({ _id: productId });

        if (result.deletedCount === 0) {
            return res
                .status(404)
                .json({ message: "Product not found in cart." });
        }

        res.status(200).json({
            message: "The product is removed from the cart.",
            result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete cart item.",
            error: error.message,
        });
    }
};
export {
    addToFavorites,
    removeFromFavorites,
    getFavoritesByUser,
    getAllFavorites,
    DeleteFavoritesItems,
};
