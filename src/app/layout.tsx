import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://blink.validator.com`),
  title: {
    default: 'Stake your SOL with validator.com',
    template: '%s | validator.com',
  },
  openGraph: {
    images: [
      {
        url: "/validator-image.png",
        alt: 'validator.com'
      },
    ],
  },
  category: "technology",
  twitter: {
    site: 'validator.com',
    creator: '@metasal_',
    card: "summary_large_image",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
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
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
