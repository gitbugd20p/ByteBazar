import "./globals.css";
import { Toaster } from "react-hot-toast";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="font-poppins antialiased">
                {children}
                <Toaster position="top-center" reverseOrder={false} />
            </body>
        </html>
    );
};

export default RootLayout;
