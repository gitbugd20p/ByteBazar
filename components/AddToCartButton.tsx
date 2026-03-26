"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";

import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import useStore from "@/store";
import toast from "react-hot-toast";
import PriceFormatter from "./PriceFormatter";
import QuantityButtons from "./QuantityButtons";

interface Props {
    product: Product | null;
    className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
    const { addItem, getItemCount } = useStore();
    const itemCount = getItemCount(product?._id);

    const isOutOfStock = product?.stock === 0;

    const handleAddToCart = () => {
        if ((product?.stock as number) > itemCount) {
            addItem(product);
            toast.success(
                `${product?.name?.substring(0, 20)}... added successfully`,
            );
        } else {
            toast.error("Can not add more than available stock");
        }
    };

    return (
        <div>
            {itemCount ? (
                <div className="text-sm w-full">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-dark-color/80">
                            Quantity
                        </span>
                        <QuantityButtons product={product} />
                    </div>
                    <div className="flex items-center justify-between border-t pt-1">
                        <span className="text-xs font-semibold">
                            Subtotal:{" "}
                        </span>
                        <PriceFormatter
                            amount={
                                product?.price ? product?.price * itemCount : 0
                            }
                        />
                    </div>
                </div>
            ) : (
                <Button
                    onClick={handleAddToCart}
                    disabled={isOutOfStock}
                    className={cn(
                        "w-full bg-shop-dark-green/80 text-shop-light_bg shadow-none border border-shop-dark-green/80 font-semibold tracking-wide hover:text-white hover:bg-shop-dark-green hoverEffect",
                        className,
                    )}
                >
                    <ShoppingBag />{" "}
                    {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                </Button>
            )}
        </div>
    );
};

export default AddToCartButton;
