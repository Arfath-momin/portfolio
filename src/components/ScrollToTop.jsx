'use client';

import { useState, useEffect } from 'react';
import * as motion from 'motion/react-client';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed right-8 bottom-8 z-50 cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="float-text" onClick={scrollToTop}>
            <span className="text-sm text-white bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
              <a>Scroll to top</a>
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
}
