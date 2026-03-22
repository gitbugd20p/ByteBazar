import { productType } from "@/constants/data";
import Link from "next/link";
import { title } from "process";

interface Props {
    selectedTab: string;
    onTabSelect: (tab: string) => VoidFunction;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
    return (
        <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-1.5 text-sm font-semibold">
                {productType?.map((item) => (
                    <button
                        key={item?.title}
                        onClick={() => onTabSelect(item?.title)}
                        className={`border border-shop-light-green/20 px-4 py-3 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop-light-green" : "bg-shop-light-green/20"}`}
                    >
                        {item?.title}
                    </button>
                ))}
            </div>
            <Link
                href={"/shop"}
                className={`border border-shop-light-green/30 px-4 py-3 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:text-white hoverEffect`}
            >
                See all
            </Link>
        </div>
    );
};

export default HomeTabBar;
