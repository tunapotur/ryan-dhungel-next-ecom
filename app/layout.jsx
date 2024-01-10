"use client";

import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import TopNav from "@/components/nav/TopNav";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { CategoryProvider } from "@/context/category";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <CategoryProvider>
          <body>
            <TopNav />
            <Toaster />
            {children}
          </body>
        </CategoryProvider>
      </SessionProvider>
    </html>
  );
}
