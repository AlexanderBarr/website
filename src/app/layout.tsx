import "~/styles/globals.css";
import HomePage from "./page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HomePage />
      </body>
    </html>
  );
}
