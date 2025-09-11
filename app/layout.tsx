import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import BackToTop from "@/components/BackToTop"

export const metadata: Metadata = {
  title: "Hamed Mahjoobi - Front-End Developer Portfolio",
  description:
    "Modern portfolio showcasing Front-End development projects, skills in React, Next.js, TypeScript, and more. View my latest work and get in touch.",
  keywords: ["portfolio", "developer", "Front-End", "react", "nextjs", "typescript"],
  authors: [{ name: "Hamed Mahjoobi" }],
  creator: "Hamed Mahjoobi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Hamed Mahjoobi - Front-End Developer Portfolio",
    description: "Modern portfolio showcasing Front-End development projects and skills.",
    siteName: "Hamed Mahjoobi Portfolio",
    images: [
      {
        url: "/hamedphoto.png",
        width: 1200,
        height: 630,
        alt: "Hamed Mahjoobi Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-roboto  antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Suspense fallback={null}>{children} <BackToTop/></Suspense>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
