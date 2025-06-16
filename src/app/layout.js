import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import FooterSection from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ElevateAI | Smart Career Growth Assistant",
  description: "ElevateAI is your smart career companion—get weekly industry trend insights, test your skills with MCQs, and build a job-ready resume with ease. Designed to guide students and professionals toward smarter career decisions using AI.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <div><FooterSection /></div>
            
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
