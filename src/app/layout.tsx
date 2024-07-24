import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>validator.com </title>
        <meta name="title" content="validator.com" />
        <meta name="description" content="Stake your SOL with validator.com" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blink.validator.com/" />
        <meta property="og:title" content="Stake your SOL with validator.com " />
        <meta property="og:description" content="desc" />
        <meta property="og:image" content="https://blink.validator.com/validator-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blink.validator.com/" />
        <meta property="twitter:title" content="Stake your SOL with validator.com" />
        <meta property="twitter:description" content="desc" />
        <meta property="twitter:image" content="https://blink.validator.com/validator-image.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
