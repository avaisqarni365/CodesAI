import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodesAI - AI-Powered Code Generation & Development",
  description: "Transform your ideas into production-ready code with AI-powered development tools. Build faster, smarter, and better with CodesAI.",
  keywords: "AI, code generation, development, programming, automation, AI coding assistant",
  authors: [{ name: "CodesAI" }],
  openGraph: {
    title: "CodesAI - AI-Powered Code Generation & Development",
    description: "Transform your ideas into production-ready code with AI-powered development tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
