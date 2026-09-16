import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legacy — Build What Outlives You",
  description: "Learn trusts from zero and start building generational wealth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
