import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Hiker's Den - Adventure Trekking Blog",
  description:
    "Discover breathtaking trails and unforgettable trekking experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
