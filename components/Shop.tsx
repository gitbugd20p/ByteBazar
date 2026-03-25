"use client";
import { BRANDS_QUERY_RESULT, Category, Product } from "@/sanity.types";
import Container from "./Container";
import { Title } from "./ui/text";
import CategoryList from "./shop/CategoryList";
import BrandList from "./shop/BrandList";
import PriceList from "./shop/PriceList";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
    categories: Category[];
    brands: BRANDS_QUERY_RESULT;
}

const Shop = ({ categories, brands }: Props) => {
    const searchParams = useSearchParams();
    const brandParams = searchParams?.get("brand");
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null,
    );
    const [selectedBrands, setSelectedBrands] = useState<string | null>(
        brandParams || null,
    );
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
    return (
        <div className="border-t">
            <Container className="mt-5">
                {/* Title */}
                <div className="sticky top-0 z-10 mb-5">
                    <div className="flex items-center justify-between">
                        <Title className="text-lg uppercase tracking-wide">
                            Get the products as your needs
                        </Title>
                        {(selectedCategory !== null ||
                            selectedBrands !== null ||
                            selectedPrice !== null) && (
                            <button
                                onClick={() => {
                                    setSelectedCategory(null);
                                    setSelectedBrands(null);
                                    setSelectedPrice(null);
                                }}
                                className="text-shop-dark-green underline text-sm mt-2 font-medium hover:text-shop-orange hoverEffect"
                            >
                                Reset Filters
                            </button>
                        )}
                    </div>
                </div>
                {/* Products and Filters */}
                <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop-dark-green/50">
                    {/* Filters */}
                    <div className="md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop-dark-green/50 scrollbar-hide">
                        <CategoryList
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                        <BrandList
                            brands={brands}
                            selectedBrands={selectedBrands}
                            setSelectedBrands={setSelectedBrands}
                        />
                        <PriceList
                            selectedPrice={selectedPrice}
                            setSelectedPrice={setSelectedPrice}
                        />
                    </div>
                    {/* Products */}
                    <div>Products</div>
                </div>
            </Container>
        </div>
    );
};

export default Shop;
