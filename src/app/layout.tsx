import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Snowbase Studio",
  description: "Professional web development agency creating stunning, high-performance websites. Transform your ideas into digital reality with our expert team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster position="bottom-right" closeButton />
        <Analytics />
      </body>
    </html>
  );
}
