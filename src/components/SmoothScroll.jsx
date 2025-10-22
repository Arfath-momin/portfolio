'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1)) || document.querySelector(hash);
        if (!el) return;

        const headerOffset = 72; // adjust to your header height in px
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    };

    setTimeout(scrollToHash, 40);
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [pathname]);

  return null;
}