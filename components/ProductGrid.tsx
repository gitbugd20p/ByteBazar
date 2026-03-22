"use client";

import { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "@/sanity.types";

const ProductGrid = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

    const query = `*[_type=="product" && variant==$variant] | order(name desc)  {..., "categories":categories[]->title}`;

    const param = { variant: selectedTab.toLowerCase() };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await client.fetch(query, param);
                setProducts(response);
            } catch (error) {
                console.error("Product fetching Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedTab]);

    return (
        <div>
            <HomeTabBar
                selectedTab={selectedTab}
                onTabSelect={setSelectedTab}
            />
            {loading ? (
                <div className="flex flex-col items-center justify-center py-10 bg-gray-100 w-full mt-10 min-h-80 gap-4">
                    <div className="space-x-2 flex items-center text-blue-600">
                        <Loader2 className="w-5 h-6 animate-spin" />
                        <span>Product is loading ...</span>
                    </div>
                </div>
            ) : products?.length ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
                    {products?.map((product) => (
                        <AnimatePresence key={product?._id}>
                            <motion.div
                                layout
                                initial={{ opacity: 0.2 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        </AnimatePresence>
                    ))}
                </div>
            ) : (
                <>No product</>
            )}
        </div>
    );
};

export default ProductGrid;
