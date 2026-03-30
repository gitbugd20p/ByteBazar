import NoAccess from "@/components/NoAccess";
import WishListProduct from "@/components/WishListProduct";
import { currentUser } from "@clerk/nextjs/server";

const WishListPage = async () => {
    const user = await currentUser();

    return (
        <>
            {user ? (
                <WishListProduct />
            ) : (
                <NoAccess details="Log in to view you wishlist items. Don't miss out on your cart products to make the payment!" />
            )}
        </>
    );
};

export default WishListPage;
