import type { Metadata } from "next";
import { Nunito_Sans } from 'next/font/google';
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const nunito_sans = Nunito_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito-sans'
})

export const metadata: Metadata = {
  title: "STAR EATER - Agence d'Ebooks",
  description: "Regarder devant soi est le prémisse du premier pas. La réussite est la finalité de nos pas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${nunito_sans.variable}`}>
      <body className="font-sans">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
