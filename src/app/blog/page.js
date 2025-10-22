'use client';

import * as motion from 'motion/react-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';

export default function Blog() {
  const blogs = [
    { image: '/images/blog/Mastering Modern Web Design Trends and Techniques for 2024.jpg', category: 'Tips & Tricks', date: '18 Mar 2025', title: 'Mastering Modern Web Design: Trends and Techniques for 2024', slug: 'mastering-modern-web-design', delay: 0.3 },
    { image: '/images/blog/Top WordPress Plugins to Boost Your Website Performance.jpg', category: 'WordPress', date: '20 Mar 2025', title: 'Top WordPress Plugins to Boost Your Website Performance', slug: 'top-wordpress-plugins', delay: 0.4 },
    { image: '/images/blog/Responsive Design Best Practices for 2025.jpg', category: 'Tips & Tricks', date: '22 Mar 2025', title: 'Responsive Design Best Practices for 2025', slug: 'responsive-design-best-practices', delay: 0.5 },
    { image: '/images/blog/How to Improve SEO for Your WordPress Website.jpg', category: 'SEO Tips', date: '25 Mar 2025', title: 'How to Improve SEO for Your WordPress Website', slug: 'improve-seo-wordpress', delay: 0.6 },
    { image: '/images/blog/The Ultimate Guide to WordPress Website Customization.jpg', category: 'WordPress', date: '28 Mar 2025', title: 'The Ultimate Guide to WordPress Website Customization', slug: 'wordpress-customization-guide', delay: 0.7 },
    { image: '/images/blog/Top Frontend Development Skills Every Web Developer Should Learn.jpg', category: 'Frontend Development', date: '30 Mar 2025', title: 'Top Frontend Development Skills Every Web Developer Should Learn', slug: 'frontend-development-skills', delay: 0.8 },
  ];

  return (
    <>
      <Header />

      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
