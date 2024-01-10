import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import { ToastProvider } from "@/provider/toast-provider";
import { ModalProvider } from "@/provider/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
