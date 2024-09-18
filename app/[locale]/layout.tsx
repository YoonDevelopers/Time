import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/system";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
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
