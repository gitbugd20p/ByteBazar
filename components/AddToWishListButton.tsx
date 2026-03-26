import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddToWishListButton = ({
    product,
    className,
}: {
    product: Product;
    className?: string;
}) => {
    const { favoriteProduct, addToFavorite } = useStore();
    const [existingProduct, setExistingProduct] = useState<Product | null>(
        null,
    );

    useEffect(() => {
        const availableProduct = favoriteProduct?.find(
            (item) => item?._id === product?._id,
        );
        setExistingProduct(availableProduct || null);
    }, [product, favoriteProduct]);

    const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        if (product?._id) {
            addToFavorite(product).then(() => {
                toast.success(
                    existingProduct
                        ? "Product removed successfully"
                        : "Product added successfully",
                );
            });
        }
    };
    return (
        <div className={cn("absolute top-2 right-2 z-20", className)}>
            <button
                onClick={handleFavorite}
                className={`p-2.5 rounded-full hover:bg-shop-dark-green hover:text-white hoverEffect`}
            >
                <Heart
                    size={15}
                    fill={`${existingProduct ? "green" : "white"}`}
                    stroke={existingProduct ? "green" : "black"}
                    className="transition-colors duration-200"
                />
            </button>
        </div>
    );
};

export default AddToWishListButton;
