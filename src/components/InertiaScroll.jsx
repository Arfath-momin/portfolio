'use client';

import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

export default function InertiaScroll() {
  useEffect(() => {
    const scrollContent = document.querySelector('#scroll-content');
    if (!scrollContent) return;

    let scrollbar = null;

    // Add a delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      scrollbar = Scrollbar.init(scrollContent, {
        damping: 0.08,
        alwaysShowTracks: false,
        continuousScrolling: true,
      });

      // Scroll to top on mount to fix visibility issue
      scrollbar.scrollTo(0, 0, 0);
      
      // Dispatch scroll and resize events after a short delay to trigger intersection observers
      setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
        window.dispatchEvent(new Event('resize'));
        
        // Force another scroll event after brief delay to ensure observers fire
        setTimeout(() => {
          window.dispatchEvent(new Event('scroll'));
        }, 100);
      }, 50);

      // Forward smooth-scrollbar scroll events to window
      scrollbar.addListener(() => {
        window.dispatchEvent(new Event('scroll'));
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);

  return null;
}