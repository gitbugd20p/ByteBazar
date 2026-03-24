"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";

import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
    product: Product | null | undefined;
    className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
    const isOutOfStock = product?.stock === 0;

    const handleAddToCart = () => {
        window.alert("Add to cart");
    };

    return (
        <div>
            <Button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={cn(
                    "w-full bg-shop-dark-green/80 text-shop-light_bg shadow-none border border-shop-dark-green/80 font-semibold tracking-wide hover:text-white hover:bg-shop-dark-green hoverEffect",
                    className,
                )}
            >
                <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </Button>
        </div>
    );
};

export default AddToCartButton;
