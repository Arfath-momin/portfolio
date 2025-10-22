import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import InertiaScroll from "@/components/InertiaScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Arfath Momin — Full Stack & WordPress Developer",
  description: "Professional Full Stack & WordPress Developer from India specializing in e-commerce websites, custom WordPress development, and MERN stack web applications. 4+ years of experience building fast, SEO-optimized websites.",
  keywords: ["Full Stack Developer", "WordPress Developer", "Web Developer India", "E-commerce Development", "MERN Stack", "React Developer", "Next.js Developer", "Custom WordPress Themes", "WooCommerce Expert", "Arfath Momin"],
  authors: [{ name: "Arfath Momin" }],
  creator: "Arfath Momin",
  publisher: "Arfath Momin",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arfathmomin.com",
    title: "Arfath Momin — Full Stack & WordPress Developer",
    description: "Professional Full Stack & WordPress Developer specializing in e-commerce websites, custom WordPress development, and MERN stack web applications.",
    siteName: "Arfath Momin Portfolio",
    images: [
      {
        url: "/images/misc/arfath-momin-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Arfath Momin - Full Stack & WordPress Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arfath Momin — Full Stack & WordPress Developer",
    description: "Professional Full Stack & WordPress Developer specializing in e-commerce websites and MERN stack applications.",
    images: ["/images/misc/arfath-momin-portrait.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased dark-scheme bg-black text-white`}>
        <InertiaScroll />
        <div id="scroll-content" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", overflow: "auto" }}>
          <div id="wrapper" className="min-h-screen">
            <div className="section-dark no-bottom no-top" id="content">
              <ClientLayout>
                {children}
              </ClientLayout>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
