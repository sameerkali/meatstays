import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/GlobalRedux/Provider";
import Script from 'next/script';
import PrimeReactProviderConfig from "@/GlobalRedux/PrimeReactProviderConfig";

const poppins = Poppins({
  weight: ['400', '500', '900', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "MeatSays - An Initiative of Government of Uttarakhand",
  description: "MeatSays - An Initiative of Government of Uttarakhand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16743173837" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16743173837');
          `}
        </Script>

        {/* Event snippet for Purchase conversion */}
        <Script id="conversion-event">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-16743173837/CZNyCNKLid4ZEM2d4q8-',
              'transaction_id': ''
            });
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        {/* <RazorPayProvider> */}
        <Providers>
          <PrimeReactProviderConfig>
            {children}
          </PrimeReactProviderConfig>
          <Toaster />
        </Providers>
        {/* </RazorPayProvider> */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}
