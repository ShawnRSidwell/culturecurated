import type { Metadata } from "next";
import { roboto } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Carefully Curated",
    default: "Carefully Curated",
  },
  description: "The best way to experience life!",
  // metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} subpixel-antialiased`}>
        {children}
      </body>
    </html>
  );
}
