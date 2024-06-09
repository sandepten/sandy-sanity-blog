import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Link from "next/link";

export const metadata = {
  title: "My Awesome Site!",
  description: "Generated by Next + Sanity",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="mx-auto min-h-screen max-w-6xl py-10">
        <nav>
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text py-10 text-lg font-bold text-transparent"
          >
            Sandy
          </Link>
        </nav>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
