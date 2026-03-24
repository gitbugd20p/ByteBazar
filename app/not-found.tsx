import Logo from "@/components/Logo";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-32">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <Logo />

                    <h2 className="mt-6 text-3xl font-extrabold text-dark-color">
                        Looking for something?
                    </h2>
                    <p className="mt-2 text-sm text-light-color">
                        We&apos;re sorry. The Web address you entered is not a
                        functioning page on our site.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4">
                        <Link
                            href="/"
                            /* Changed to shop-dark-green and used opacity-80 */
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-shop-dark-green/80 hover:bg-shop-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shop-orange hoverEffect"
                        >
                            Go to ByteBazar&apos;s home page
                        </Link>
                        <Link
                            href="/help"
                            /* Changed amazonBlue to shop-dark-green or dark-color */
                            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-semibold rounded-md text-dark-color bg-white hover:bg-shop-light-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shop-dark-green"
                        >
                            Help
                        </Link>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm text-light-color">
                        Need help? Visit the{" "}
                        <Link
                            href="/help"
                            /* Changed amazon-blue to shop-orange */
                            className="font-medium text-shop-orange hover:underline"
                        >
                            Help section
                        </Link>{" "}
                        or{" "}
                        <Link
                            href="/contact"
                            className="font-medium text-shop-orange hover:underline"
                        >
                            contact us
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
