import { Title } from "./ui/text";
import Link from "next/link";
import { getAllBrands } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";

const extraData = [
    {
        title: "Free Delivery",
        description: "Free shipping over $100",
        icon: <Truck size={45} />,
    },
    {
        title: "Free Return",
        description: "Free returning over $100",
        icon: <GitCompareArrows size={45} />,
    },
    {
        title: "Customer Support",
        description: "Friendly 24/7 customer support",
        icon: <Headset size={45} />,
    },
    {
        title: "Money Back guarantee",
        description: "Quality Check by our team",
        icon: <ShieldCheck size={45} />,
    },
];

const ShopByBrands = async () => {
    const brands = await getAllBrands();
    return (
        <div className="mb-10 lg:mb-20 bg-shop-light_bg p-5 lg:p-7 rounded-md">
            <div className="flex items-center gap-5 justify-between mb-10">
                <Title>Shop By Brands</Title>
                <Link
                    href="/shop"
                    className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect"
                >
                    View all
                </Link>
            </div>

            {/* Branks Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
                {brands?.map((brand) => (
                    <Link
                        key={brand?._id}
                        href={{
                            pathname: "/shop",
                            query: { brand: brand?.slug?.current },
                        }}
                        className="bg-white w-36 h-24 flex items-center justify-center rounded-lg border hover:shadow-md transition-shadow shadow-shop-dark-green/20 hoverEffect"
                    >
                        {brand?.image && (
                            <Image
                                src={urlFor(brand?.image).url()}
                                alt="brandImage"
                                width={250}
                                height={250}
                                className="w-32 h-20 object-contain"
                            />
                        )}
                    </Link>
                ))}
            </div>

            {/* Supports */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 p-2 shadow-sm shadow-shop_light_green/20 py-5">
                {extraData?.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 group bg-white p-4 rounded-md hover:text-shop_light_green transition-colors"
                    >
                        <span className="inline-flex scale-100 group-hover:scale-90 hoverEffect">
                            {item?.icon}
                        </span>
                        <div className="text-sm">
                            <p className="text-darkColor/80 font-bold capitalize">
                                {item?.title}
                            </p>
                            <p className="text-lightColor">
                                {item?.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopByBrands;
