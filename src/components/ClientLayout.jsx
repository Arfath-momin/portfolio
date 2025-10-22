'use client';

import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

export default function ClientLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <SmoothScroll />
      {children}
    </>
  );
}