"use client";

import useStore from "@/store";
import { useState } from "react";
import Container from "./Container";
import { Heart, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Product } from "@/sanity.types";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceFormatter from "./PriceFormatter";
import AddToCartButton from "./AddToCartButton";

const WishListProduct = () => {
    const { favoriteProduct, removeFromFavorite, resetFavorite } = useStore();
    const [visibleProducts, setVisibleProducts] = useState(7);
    const loadMore = () => {
        setVisibleProducts((prev) =>
            Math.min(prev + 5, favoriteProduct.length),
        );
    };

    const handleResetWishList = () => {
        const confirmed = window.confirm(
            "Are you sure to reset your wishlist?",
        );
        if (confirmed) {
            resetFavorite();
            toast.success("Wishlist reset successfully!");
        }
    };
    return (
        <Container>
            {favoriteProduct?.length > 0 ? (
                <>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="border-b">
                                <tr className="bg-black/5">
                                    <th className="p-2 text-left">Image</th>
                                    <th className="p-2 text-left hidden md:table-cell">
                                        Category
                                    </th>
                                    <th className="p-2 text-left hidden md:table-cell">
                                        Type
                                    </th>
                                    <th className="p-2 text-left hidden md:table-cell">
                                        Statue
                                    </th>
                                    <th className="p-2 text-left">Price</th>
                                    <th className="p-2 text-center md:text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {favoriteProduct
                                    ?.slice(0, visibleProducts)
                                    ?.map((product: Product) => (
                                        <tr
                                            key={product?._id}
                                            className="border-b"
                                        >
                                            {/* image */}
                                            <td className="px-2 py-4 flex items-center gap-2">
                                                <X
                                                    size={18}
                                                    className="hover:text-red-600 hover:cursor-pointer hoverEffect"
                                                    onClick={() => {
                                                        removeFromFavorite(
                                                            product?._id,
                                                        );
                                                        toast.success(
                                                            "Product removed from wishlist",
                                                        );
                                                    }}
                                                />
                                                {product?.images && (
                                                    <Link
                                                        href={`/product/${product?.slug?.current}`}
                                                        className="border rounded-md group hidden md:inline-flex"
                                                    >
                                                        <Image
                                                            src={urlFor(
                                                                product
                                                                    ?.images[0],
                                                            ).url()}
                                                            alt="product image"
                                                            width={80}
                                                            height={80}
                                                            className="rounded-md group-hover:scale-105 hoverEffect h-20 w-20 object-contain"
                                                        />
                                                    </Link>
                                                )}
                                                <p className="line-clamp-1">
                                                    {product?.name}
                                                </p>
                                            </td>

                                            {/* category */}
                                            <td>
                                                {product?.categories && (
                                                    <p className="uppercase line-clamp-1 text-xs font-medium">
                                                        {product?.categories
                                                            ?.map((cat) => cat)
                                                            .join(", ")}
                                                    </p>
                                                )}
                                            </td>

                                            {/* variant */}
                                            <td className="p-2 capitalize hidden md:table-cell">
                                                {product?.variant}
                                            </td>

                                            {/* stock */}
                                            <td
                                                className={`p-2 w-24 ${
                                                    (product?.stock as number) >
                                                    0
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                } font-medium text-sm hidden md:table-cell`}
                                            >
                                                {(product?.stock as number) > 0
                                                    ? "In Stock"
                                                    : "Out of Stock"}
                                            </td>

                                            {/* price */}
                                            <td className="p-2">
                                                <PriceFormatter
                                                    amount={product?.price}
                                                />
                                            </td>

                                            {/* action */}
                                            <td className="p-2">
                                                <AddToCartButton
                                                    product={product}
                                                    className="w-full"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                    {/* load - more/less button */}
                    <div className="flex items-center gap-2">
                        {visibleProducts > 10 && (
                            <div className="mt-6 text-center">
                                <Button
                                    variant="outline"
                                    onClick={() => setVisibleProducts(10)}
                                >
                                    Load Less
                                </Button>
                            </div>
                        )}
                        {visibleProducts < favoriteProduct?.length && (
                            <div className="mt-6 text-center">
                                <Button variant="outline" onClick={loadMore}>
                                    Load More
                                </Button>
                            </div>
                        )}
                    </div>
                    {/* favorite button */}
                    {favoriteProduct?.length > 0 && (
                        <Button
                            className="my-6 font-semibold hover:bg-red-600 hover:text-white hoverEffect"
                            variant="destructive"
                            size="lg"
                            onClick={handleResetWishList}
                        >
                            Reset WishList
                        </Button>
                    )}
                </>
            ) : (
                <div className="flex min-h-100  flex-col items-center justify-center space-y-5 relative mb-4 text-center">
                    <div className="relative h-16 w-16 flex items-center justify-center">
                        <div className="absolute inset-0 animate-ping rounded-full bg-muted-foreground/20">
                            <Heart
                                className="h-12 w-12 text-muted-foreground"
                                strokeWidth={1.5}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl  font-semibold tracking-tight">
                            You Wishlist is empty
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Items added to your wishList will appear here
                        </p>
                    </div>
                    <Button className="bg-shop-dark-green">
                        <Link href="/shop">Continue Shopping</Link>
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default WishListProduct;
