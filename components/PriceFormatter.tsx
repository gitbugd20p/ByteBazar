import { cn } from "@/lib/utils";

interface Props {
    amount: number | undefined;
    className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
    // Format the price safely
    const formattedPrice = amount
        ? new Number(amount).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
          })
        : "$0.00";

    return (
        <span className={cn("text-sm font-semibold text-darkColor", className)}>
            {formattedPrice}
        </span>
    );
};

export default PriceFormatter;
