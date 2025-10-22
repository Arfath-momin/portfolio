'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as motion from 'motion/react-client';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/services', label: 'What I Do' },
    { href: '/works', label: 'Works' },
    { href: '/contact', label: 'Hire Me' },
  ];

  // Page titles mapping
  const pageTitles = {
    '/': 'ARFATH MOMIN',
    '/about': 'ABOUT ME',
    '/services': 'WHAT I DO',
    '/works': 'MY WORKS',
    '/blog': 'MY BLOG',
    '/contact': 'HIRE ME',
  };

  const currentTitle = pageTitles[pathname] || 'ARFATH MOMIN';

  return (
    <section className="no-top">
      <div className="text-fit-wrapper">
        <motion.h1 
          key={pathname}
          className="text-fit text-[120px] md:text-[180px] lg:text-[220px] font-extrabold tracking-tighter"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {currentTitle}
        </motion.h1>
        <motion.div 
          className="d-menu-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg font-medium">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                className={pathname === item.href ? 'active' : ''}
              >
                <Link 
                  href={item.href}
                  className={`hover:text-white transition-colors ${
                    pathname === item.href ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
