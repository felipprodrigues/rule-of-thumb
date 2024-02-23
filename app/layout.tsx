import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { AuthProvider } from './providers/auth'

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "Rule of Thumb",
  description: "Formula.Monks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
