import type { Metadata } from "next";
import localFont from "next/font/local";
// import { DM_Sans, Onest } from "next/font/google";
import "./globals.css";

const graphik = localFont({
  src: [
    { path: "../fonts/GraphikThin.otf", weight: "100", style: "normal" },
    { path: "../fonts/GraphikExtralight.otf", weight: "200", style: "normal" },
    { path: "../fonts/GraphikLight.otf", weight: "300", style: "normal" },
    { path: "../fonts/GraphikRegular.otf", weight: "400", style: "normal" },
    { path: "../fonts/GraphikMedium.otf", weight: "500", style: "normal" },
    { path: "../fonts/GraphikSemibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/GraphikBold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-graphik",
  display: "swap", // Ensures fonts load seamlessly
});

export const metadata: Metadata = {
  title: "Akshit Gupta",
  description: "Full stack developer , working remotely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${graphik.className} antialiased`}>{children}</body>
    </html>
  );
}
