import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics></Analytics>
        {children}
      </body>
    </html>
  );
}
