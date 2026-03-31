import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, Show, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Logs } from "lucide-react";
import { getMyOrders } from "@/sanity/queries";

const Header = async () => {
    const user = await currentUser();
    const { userId } = await auth();
    let orders = null;
    if (userId) {
        orders = await getMyOrders(userId);
        console.log(orders);
    }

    return (
        <header className="bg-white/70 py-5 sticky top-0 z-50 backdrop-blur-md">
            <Container className="flex items-center justify-between text-light-color">
                <div className="w-auto md:w-1/3 flex items-center gap-2.5 md:gap-0 justify-start ">
                    <MobileMenu />
                    <Logo />
                </div>
                <HeaderMenu />
                <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
                    <SearchBar />
                    <CartIcon />
                    <FavoriteButton />
                    <ClerkLoaded>
                        <Show when="signed-in">
                            <Link
                                href={"/orders"}
                                className="group relative hover:text-shop_light_green hoverEffect"
                            >
                                <Logs />
                                <span className="absolute -top-1 -right-1 bg-shop-btn-dark-green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                                    {orders?.length ? orders?.length : 0}
                                </span>
                            </Link>
                            <UserButton />
                        </Show>

                        {!user && <SignIn />}
                    </ClerkLoaded>
                </div>
            </Container>
        </header>
    );
};

export default Header;
