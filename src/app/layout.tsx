import { Inter } from "next/font/google";
import "~/styles/globals.css";
import { TopNav } from "./_components/TopNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <body className={`font-sans ${inter.variable} dark`}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNav />
            <main className="">{children}</main>
          </div>
          <div id="modal-root" />
        </body>
      </body>
    </html>
  );
}
