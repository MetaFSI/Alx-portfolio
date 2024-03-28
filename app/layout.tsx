import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alx portfolio app",
  description: "alx portfolio project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`bg-transparent ${inter.className}`}>
      <ThemeProvider
        enableSystem={false}
        attribute="class"
        defaultTheme="light"
      >
        <Header />
        {children}
        

<footer className="bg-white rounded-lg  m-4 dark:bg-gray-800 flex justify-center">
<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024 <a  className="hover:underline">Mounir el fahsi</a>. All Rights Reserved.
      </span>
</footer>

      </ThemeProvider>
    </body>
  </html>
  );
}
