import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/system";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Head from "next/head";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Updated Next.js PWA",
  description: "This is an updated version of my awesome Progressive Web App",
  icons: [
    { rel: "icon", url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    { rel: "icon", url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" }
  ],
  manifest: "/manifest.json",
};
export const viewport = {
  themeColor: '#1e90ff',  // themeColor는 이제 viewport 내에서 설정됩니다.
};
export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}){
    // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} >
            <Head>
        <title>International Time and Holidays</title>
        <meta name="description" content="Check the current international time and public holidays in different countries." />
        <meta property="og:title" content="International Time and Holidays" />
        <meta property="og:description" content="Find out the current time around the world and the public holidays in various countries." />
        <meta property="og:image" content="/icons/icon-512x512.png" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://time-nrpw.vercel.app" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "International Time and Holidays",
            "url": "https://time-nrpw.vercel.app",
            "description": "Find out the current time and public holidays in various countries.",
          })}
        </script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}
      >
        <NextIntlClientProvider messages={messages}>
        <NextUIProvider>
        {children}
        </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
