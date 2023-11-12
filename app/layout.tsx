import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.scss";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Scrolly Animation - Dhruv Bakshi",
    description: "DHRUV BAKSHI MADE THIS",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={nunito.className}>{children}</body>
        </html>
    );
}

