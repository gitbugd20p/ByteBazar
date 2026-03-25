import { BRANDS_QUERY_RESULT } from "@/sanity.types";
import React from "react";
import { Title } from "../ui/text";
import { RadioGroup } from "@base-ui/react";
import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Props {
    brands: BRANDS_QUERY_RESULT;
    selectedBrands?: string | null;
    setSelectedBrands: React.Dispatch<React.SetStateAction<string | null>>;
}
const BrandList = ({ brands, selectedBrands, setSelectedBrands }: Props) => {
    return (
        <div className="w-full bg-white p-5 pt-0">
            <Title className="text-base font-black">Product Categories</Title>
            <RadioGroup
                value={selectedBrands || ""}
                className="mt-2 space-y-2.5"
            >
                {brands?.map((brand) => (
                    <div
                        key={brand?._id}
                        className="flex items-center hover:cursor-pointer gap-1.5"
                        onClick={() =>
                            setSelectedBrands(brand?.slug?.current as string)
                        }
                    >
                        <RadioGroupItem
                            value={brand?.slug?.current as string}
                            id={brand?.slug?.current}
                            className="rounded-sm"
                        />
                        <Label
                            htmlFor={brand?.slug?.current}
                            className={`${selectedBrands === brand?.slug?.current ? "font-semibold text-shop-dark-green" : "font-normal"} cursor-pointer`}
                        >
                            {brand?.title}
                        </Label>
                    </div>
                ))}
                {selectedBrands && (
                    <button
                        onClick={() => setSelectedBrands(null)}
                        className="text-sm font-medium mt-2 underline underline-offset-2 decoration-1 hover:text-shop-dark-green hoverEffect text-left"
                    >
                        Reset selection
                    </button>
                )}
            </RadioGroup>
        </div>
    );
};

export default BrandList;
