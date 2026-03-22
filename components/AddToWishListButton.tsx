import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";
import React from "react";

const AddToWishListButton = ({
    product,
    className,
}: {
    product: Product;
    className?: string;
}) => {
    return (
        <div className={cn("absolute top-2 right-2 z-20", className)}>
            <button className="p-2.5 rounded-full hover:bg-shop-dark-green hover:text-white hoverEffect bg-shop-lighter-bg">
                <Heart size={15} />
            </button>
        </div>
    );
};

export default AddToWishListButton;
