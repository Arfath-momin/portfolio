'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogSingle({ params }) {
  const blogs = [
    {
      slug: 'mastering-modern-web-design',
      title: 'Mastering Modern Web Design: Trends and Techniques for 2024',
      category: 'Tips & Tricks',
      date: '18 Mar 2025',
      image: '/images/blog/Mastering Modern Web Design Trends and Techniques for 2024.jpg',
      content: [
        'Web design is evolving rapidly in 2024, with trends such as dark mode, minimalism, and micro-interactions dominating the digital landscape. Staying updated with these modern techniques ensures your website remains visually appealing and user-friendly.',
        'Responsive design continues to be a critical factor, especially with mobile-first indexing in Google. Optimizing your layouts for various screen sizes improves user experience and boosts search engine rankings.',
        'Incorporating tools like Elementor, Gutenberg, and advanced CSS frameworks allows developers to create dynamic, interactive websites without compromising speed or performance.'
      ],
    },
    {
      slug: 'top-wordpress-plugins',
      title: 'Top WordPress Plugins to Boost Your Website Performance',
      category: 'WordPress',
      date: '20 Mar 2025',
      image: '/images/blog/Top WordPress Plugins to Boost Your Website Performance.jpg',
      content: [
        'WordPress offers thousands of plugins, but choosing the right ones can significantly impact your website\'s performance. Popular plugins like WP Rocket, Yoast SEO, and Elementor enhance speed, SEO, and design flexibility.',
        'Security plugins such as Wordfence and iThemes Security protect your site from hackers and malware. A secure website improves trust, user retention, and search engine ranking.',
        'Optimizing images with Smush or ShortPixel and managing database performance with plugins ensures faster load times and better overall user experience.'
      ],
    },
    {
      slug: 'responsive-design-best-practices',
      title: 'Responsive Design Best Practices for 2025',
      category: 'Tips & Tricks',
      date: '22 Mar 2025',
      image: '/images/blog/Responsive Design Best Practices for 2025.jpg',
      content: [
        'With mobile traffic surpassing desktop, responsive web design is no longer optional. Using fluid grids, flexible images, and CSS media queries ensures your website adapts seamlessly to all devices.',
        'Testing responsiveness across multiple screen sizes and devices prevents layout issues and improves accessibility, keeping visitors engaged longer.',
        'Incorporating lazy loading, optimized images, and minimized CSS/JS enhances site speed, which is a crucial factor for Google ranking.'
      ],
    },
    {
      slug: 'improve-seo-wordpress',
      title: 'How to Improve SEO for Your WordPress Website',
      category: 'SEO Tips',
      date: '25 Mar 2025',
      image: '/images/blog/How to Improve SEO for Your WordPress Website.jpg',
      content: [
        'SEO is critical for driving organic traffic. Using plugins like Yoast SEO or Rank Math allows you to optimize titles, meta descriptions, and content structure effortlessly.',
        'Focusing on keywords relevant to your niche, optimizing images, and creating internal linking strategies improves search engine visibility.',
        'Speed optimization, mobile responsiveness, and structured data (schema markup) play a huge role in improving your Google rankings and enhancing user experience.'
      ],
    },
    {
      slug: 'wordpress-customization-guide',
      title: 'The Ultimate Guide to WordPress Website Customization',
      category: 'WordPress',
      date: '28 Mar 2025',
      image: '/images/blog/The Ultimate Guide to WordPress Website Customization.jpg',
      content: [
        'Customizing WordPress websites goes beyond themes. Using page builders like Elementor and CSS tweaks allows you to create a unique design tailored to your brand.',
        'Adding custom post types, custom fields, and dynamic content enhances functionality, making your website more interactive and engaging for visitors.',
        'Regular updates, backups, and testing are essential for maintaining a secure, fast, and fully functional website.'
      ],
    },
    {
      slug: 'frontend-development-skills',
      title: 'Top Frontend Development Skills Every Web Developer Should Learn',
      category: 'Frontend Development',
      date: '30 Mar 2025',
      image: '/images/blog/Top Frontend Development Skills Every Web Developer Should Learn.jpg',
      content: [
        'Frontend development is constantly evolving, with JavaScript frameworks like React, Next.js, and Vue.js leading the way. Learning these skills makes you more competitive in the job market.',
        'Mastering HTML5, CSS3, and modern JavaScript techniques is essential for building responsive and interactive web applications.',
        'Understanding version control with Git, performance optimization, and accessibility standards ensures your websites are professional, fast, and user-friendly.'
      ],
    }
  ];

  // Find the current blog post by slug
  const blog = blogs.find(b => b.slug === params.slug) || blogs[0];

  // Get related posts (exclude current post)
  const relatedPosts = blogs
    .filter(b => b.slug !== blog.slug)
    .slice(0, 3)
    .map(b => ({ image: b.image, title: b.title, slug: b.slug }));

  return (
    <>
      <Header />

      {/* Blog Header */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div>
              <div className="mb-4">
                <span className="inline-block font-bold text-sm mr-4">
                  <i className="icofont-tag text-white mr-2"></i>{blog.category}
                </span>
                <span className="inline-block font-semibold text-sm text-gray-400">
                  <i className="icofont-ui-calendar text-white mr-2"></i>{blog.date}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="blog-read"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="post-text text-gray-300 leading-relaxed space-y-6">
                {blog.content.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? 'first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:text-white' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2">
              <motion.div 
                className="subtitle text-sm font-semibold text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Related Post
              </motion.div>
            </div>
            <div className="lg:col-span-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="text-lg font-semibold hover:text-gray-300 transition-colors">{post.title}</h4>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
