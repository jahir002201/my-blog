import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Welcome to My Blog",
  description: "Insights, tutorials, and articles on web development and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen">
        <Header />
        <div>
        {children}
        </div>
        <Footer />
        </div>
        </body>
    </html>
  );
}
