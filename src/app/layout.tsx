import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alessandro Ferrari",
  description: "Full Stack Developer",
  icons: ["https://avatars.githubusercontent.com/u/97349847"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/departure-mono/departure-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
