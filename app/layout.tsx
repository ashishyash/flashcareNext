import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppDataProvider } from "@/contexts/AppDataContext";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: "FlashCareAI - Healthcare Crisis Management",
  description: "Professional healthcare crisis management system for real-time strike response and resource allocation.",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} overflow-hidden`}>
        <AppDataProvider>
          {children}
        </AppDataProvider>
      </body>
    </html>
  );
}
