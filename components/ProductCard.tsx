import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToWishListButton from "./AddToWishListButton";
import { Title } from "./ui/text";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="text-sm border border-dark_blue/20 rounded-md bg-white group">
            <div className="relative group overflow-hidden bg-shop-light_bg">
                {product?.images && (
                    <Image
                        src={urlFor(product?.images[0]).url()}
                        alt="ProductImage"
                        loading="lazy"
                        width={700}
                        height={700}
                        className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop-light_bg duration-500 ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
                    />
                )}
                <AddToWishListButton product={product} />
                {product?.status === "sale" && (
                    <p className="absolute top-2 left-2 z-10 text-xs border border-dark-color/50 px-2 rounded-full hoverEffect group-hover:border-shop-light-green group-hover:text-shop-light-green">
                        Sale!
                    </p>
                )}

                {product?.status === "new" && (
                    <p className="absolute top-2 left-2 z-10 text-xs border border-dark-color/50 px-2 rounded-full hoverEffect group-hover:border-shop-light-green group-hover:text-shop-light-green">
                        New Arrival!
                    </p>
                )}

                {product?.status === "hot" && (
                    <Link
                        href="/deal"
                        className="absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect"
                    >
                        <Flame
                            size={18}
                            fill="#fb6c08"
                            className="text-shop_orange/50 hoverEffect"
                        />
                    </Link>
                )}
            </div>

            <div className="p-3">
                {product?.categories && (
                    <p className="uppercase line-clamp-1 text-xs text-shop-light-text">
                        {product?.categories?.map((cat) => cat).join(", ")}
                    </p>
                )}

                <Title className="text-sm line-clamp-1">{product?.name}</Title>
                <div className="flex items-center gap-2">
                    <div className=" flex items-center gap-0.5">
                        {[...Array(5)].map((_, index) => (
                            <StarIcon
                                size={12}
                                key={index}
                                className={
                                    index < 4
                                        ? "text-shop-lighter-green"
                                        : "text-shop-light-text"
                                }
                                fill={index < 4 ? "#93D991" : "#ababab"}
                            />
                        ))}
                    </div>
                    <p className="text-shop-light-text text-xs tracking-wide">
                        5 Review
                    </p>
                </div>
                <div className="flex items-center gap-2.5">
                    <p className="font-medium">In Stock</p>
                    <p
                        className={`${product?.stock === 0 ? "text-red-600" : "text-shop_light_green font-semibold"}`}
                    >
                        {(product?.stock as number) > 0
                            ? product?.stock
                            : "unavailable"}
                    </p>
                </div>
                <PriceView
                    price={product?.price}
                    discount={product?.discount}
                    className="text-sm"
                />
                <AddToCartButton
                    product={product}
                    className="w-36 rounded-full"
                />
            </div>
        </div>
    );
};

export default ProductCard;
