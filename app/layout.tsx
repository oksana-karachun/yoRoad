import React from 'react';
import Navbar from "@/components/Navbar";
import './globals.css'
import Footer from "@/components/Footer";

export const metadata = {
  title: 'yoRoad-app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
      </body>
    </html>
  )
}