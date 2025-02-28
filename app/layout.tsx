import type { Metadata } from "next";
import localFont from "next/font/local";
// import { DM_Sans, Onest } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

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
  metadataBase: new URL("https://www.akshit.app/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Akshit Gupta",
    template: "%s | Akshit Gupta",
  },
  description: "I write Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${graphik.className} antialiased w-full min-h-screen`}
        >
          <div className="max-w-[700px] mx-auto py-10 px-6 lg:px-10 lg:py-20  min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
