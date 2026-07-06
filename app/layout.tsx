import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZD Pet Tag | NFC & QR Pet ID Tags",
  description: "NFC and QR smart pet tags for lost-pet rescue, customization, and pet accessory brands."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
