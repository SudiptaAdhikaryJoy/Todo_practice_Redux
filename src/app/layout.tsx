"use client";

import "~/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Provider } from "react-redux";
import { cn } from "../lib/utils";
import { store } from "~/redux/store";


// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
