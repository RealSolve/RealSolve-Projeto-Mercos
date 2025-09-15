import type React from "react"
import { AuthProvider } from "@/contexts/auth-context";
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mercos Dashboard",
  description: "Sistema de gestão comercial Mercos",
  generator: "v0.app",
}

export default function RootLayout({
  children
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <AuthProvider>
          <Suspense fallback={null}>
            {children}
          </Suspense>
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
