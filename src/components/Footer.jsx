'use client';

import Link from 'next/link';
import * as motion from 'motion/react-client';

export default function Footer() {
  const socialLinks = [
    { href: 'https://www.instagram.com/codewitharfath/', label: 'Instagram' },
    { href: 'https://in.linkedin.com/in/arfath-momin-2a52a0260', label: 'LinkedIn' },
    { href: 'https://github.com/Arfath-momin', label: 'GitHub' },
  ];

  return (
    <footer className="py-12 md:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-6">
              <ul className="flex flex-wrap gap-6 mb-6">
                <li>
                  <Link 
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    Blog
                  </Link>
                </li>
                {socialLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <p className="text-gray-500 text-sm">
                © 2025 Arfath Momin. All Rights Reserved.
              </p>
            </div>
          </motion.div>

          <div className="text-left lg:text-right">
            <Link href="/contact">
              <motion.h2 
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold cursor-pointer hover:opacity-80 transition-opacity"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Let's Talk
              </motion.h2>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
