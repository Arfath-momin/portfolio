'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WorkSingle({ params }) {
  const works = [
    {
      slug: 'the-arpra',
      title: 'The ARPRA',
      category: 'E-commerce Website',
      link: 'https://thearpra.in/',
      client: 'The ARPRA',
      year: '2025',
      overview: 'The ARPRA is a streetwear apparel brand offering bold, minimal designs for young audiences. The e-commerce platform emphasizes aesthetics, product clarity, and user experience optimized for conversions.',
      objectives: [
        'Develop a stylish and responsive fashion e-commerce platform using WooCommerce',
        'Highlight key apparel collections with seamless navigation and product filters',
        'Implement promotional popups and discount logic for engagement',
        'Optimize performance for fast load times and better SEO rankings',
      ],
      techStack: ['WordPress', 'WooCommerce', 'HTML', 'CSS', 'JavaScript'],
      images: ['/images/work-single/7.webp', '/images/work-single/8.webp'],
      testimonial: {
        quote: 'The website\'s simplicity and speed helped us scale our clothing line online — exactly what we envisioned.',
        author: 'The ARPRA Team',
        role: 'Creative Department',
      },
    },
    {
      slug: 'stoned-monkey-india',
      title: 'Stoned Monkey India',
      category: 'E-commerce Website',
      link: 'https://stonedmonkeyindia.com/',
      client: 'Stoned Monkey India',
      year: '2024',
      overview: 'Stoned Monkey India is a dessert and beverage brand expanding nationally through a franchise model. The website focuses on franchise inquiries, menu presentation, and product visuals that reflect a premium F&B identity.',
      objectives: [
        'Build a clean and energetic website for the dessert brand',
        'Design dedicated sections for products, franchise, and brand story',
        'Ensure responsive layouts with clear calls-to-action',
        'Integrate inquiry forms to support expansion opportunities',
      ],
      techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
      images: ['/images/work-single/5.webp', '/images/work-single/6.webp'],
      testimonial: {
        quote: 'The website gave our franchise brand a modern and inviting look — it\'s been a great asset in expansion talks.',
        author: 'Stoned Monkey India',
        role: 'Operations Head',
      },
    },
    {
      slug: 'jayce-ergonomics',
      title: 'Jayce Ergonomics',
      category: 'Corporate Website',
      link: 'https://jayceergonomics.com/',
      client: 'Jayce Ergonomics',
      year: '2024',
      overview: 'Jayce Ergonomics manufactures premium ergonomic chairs for offices and home workspaces. The website serves as a corporate catalogue that integrates product listings, Amazon store links, and SEO-driven visibility.',
      objectives: [
        'Develop a business-focused website to showcase ergonomic products',
        'Integrate Amazon links for direct product purchases',
        'Highlight features, specifications, and use-cases visually',
        'Optimize for brand trust and search discoverability',
      ],
      techStack: ['WordPress', 'Elementor', 'CSS', 'JavaScript', 'SEO Plugins'],
      images: ['/images/work-single/1.webp', '/images/work-single/2.webp'],
      testimonial: {
        quote: 'The website reflects our premium brand image perfectly. It\'s helping us attract both retail and B2B buyers.',
        author: 'Team Jayce Ergonomics',
        role: 'Marketing Division',
      },
    },
    {
      slug: 'canyon-talent',
      title: 'Canyon Talent',
      category: 'Corporate Website',
      link: 'https://canyontalent.com/',
      client: 'Canyon Talent',
      year: '2024',
      overview: 'Canyon Talent provides business process outsourcing and managed workforce solutions. The site is designed to communicate high-tech professionalism, featuring service details and lead capture forms for global clients.',
      objectives: [
        'Create a corporate website with modern, tech-driven aesthetics',
        'Highlight services like BPO, RPA, and digital mail management',
        'Design intuitive contact pathways for inquiries and partnerships',
        'Ensure mobile-first performance and search optimization',
      ],
      techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
      images: ['/images/work-single/13.webp', '/images/work-single/14.webp'],
      testimonial: {
        quote: 'The design aligns perfectly with our global BPO brand identity — professional and conversion-focused.',
        author: 'Canyon Talent',
        role: 'HR Director',
      },
    },
    {
      slug: 'daschiff',
      title: 'Daschiff by Neeraj Pandey',
      category: 'E-commerce Website',
      link: 'https://daschiff.com/',
      client: 'Daschiff',
      year: '2023',
      overview: 'Daschiff is a luxury apparel label offering Chikankari-based fabrics and ethnic wear. The e-commerce website emphasizes visual storytelling with a global-ready design that supports retail and wholesale sales.',
      objectives: [
        'Develop a premium fashion e-commerce website for global customers',
        'Highlight handcrafted products through elegant visuals and layouts',
        'Integrate WooCommerce with advanced product filters',
        'Ensure scalability for wholesale and retail operations',
      ],
      techStack: ['WordPress', 'WooCommerce', 'CSS', 'JavaScript'],
      images: ['/images/work-single/15.webp', '/images/work-single/16.webp'],
      testimonial: {
        quote: 'Aesthetically rich and user-friendly — exactly the balance our luxury fashion label needed.',
        author: 'Daschiff Management',
        role: 'Brand Manager',
      },
    },
    {
      slug: 'jetsuds-autospa',
      title: 'JetSuds AutoSpa',
      category: 'Service Website',
      link: 'https://jetsudsautospa.com/',
      client: 'JetSuds AutoSpa',
      year: '2023',
      overview: 'JetSuds AutoSpa is a car detailing and ceramic coating service provider offering both individual and corporate fleet care. The website enables online service booking and promotes diversified cleaning solutions.',
      objectives: [
        'Design a service-oriented website with booking functionality',
        'Showcase detailing, ceramic coating, and corporate services',
        'Ensure seamless navigation and high conversion for bookings',
        'Highlight Google Maps integration for easy service location',
      ],
      techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
      images: ['/images/work-single/17.webp', '/images/work-single/18.webp'],
      testimonial: {
        quote: 'Online bookings have increased since launch — the site\'s clarity and design make us look truly professional.',
        author: 'JetSuds AutoSpa Team',
        role: 'Operations Manager',
      },
    },
    {
      slug: 'lavesh-exports',
      title: 'Lavesh Exports',
      category: 'Corporate Website',
      link: 'https://laveshexports.com/',
      client: 'Lavesh Exports',
      year: '2024',
      overview: 'Lavesh Exports is an ISO and FSSAI-certified global exporter of agricultural produce, spices, and animal feeds. The website builds international credibility with professional branding and inquiry support.',
      objectives: [
        'Build a B2B website to showcase export product categories',
        'Highlight certifications and quality standards',
        'Add an inquiry system for international buyers',
        'Ensure strong SEO and responsive layout for global users',
      ],
      techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'SEO Plugins'],
      images: ['/images/work-single/21.webp', '/images/work-single/22.webp'],
      testimonial: {
        quote: 'Our export clients now have a proper online reference for our products and services — exactly what we needed.',
        author: 'Lavesh Exports',
        role: 'Export Manager',
      },
    },
    {
      slug: 'seapride-exims',
      title: 'Seapride Exims',
      category: 'Corporate Website',
      link: 'https://seaprideexims.com/',
      client: 'Seapride Exims',
      year: '2024',
      overview: 'Seapride Exims supplies marine and industrial spare parts, leveraging proximity to the Alang Shipbreaking Yard. The website was designed to convey industrial expertise and build B2B trust.',
      objectives: [
        'Create an industrial product catalogue website using WordPress',
        'Highlight core products like engines, compressors, and safety gear',
        'Add contact and quotation systems for global buyers',
        'Use a clean industrial design with strong technical branding',
      ],
      techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
      images: ['/images/work-single/9.webp', '/images/work-single/10.webp'],
      testimonial: {
        quote: 'It\'s now easier for global clients to find our spare parts and reach us directly through the website.',
        author: 'Seapride Exims',
        role: 'Managing Partner',
      },
    },
    {
      slug: 'merchant-design',
      title: 'Merchant Design',
      category: 'Portfolio Website',
      link: 'https://merchantdesign.in/',
      client: 'Merchant Design',
      year: '2024',
      overview: 'Merchant Design is a global interior design studio offering architectural and smart home solutions across UAE, USA, and UK. The website showcases projects, expertise, and global presence through a modern portfolio layout.',
      objectives: [
        'Design a visually refined portfolio website for a global interior brand',
        'Highlight international project case studies and services',
        'Create a responsive and immersive visual experience',
        'Optimize for global SEO and brand consistency',
      ],
      techStack: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
      images: ['/images/work-single/19.webp', '/images/work-single/20.webp'],
      testimonial: {
        quote: 'The website now feels as premium and international as our projects — excellent attention to detail.',
        author: 'Merchant Design Team',
        role: 'Creative Director',
      },
    },
    {
      slug: 'st-dalfour-cream-uae',
      title: 'St. Dalfour Cream UAE',
      category: 'Full Stack Web App',
      link: 'https://stdalfourcream.ae/',
      client: 'St. Dalfour Cream UAE',
      year: '2024',
      overview: 'St. Dalfour Cream UAE is a skincare brand offering premium whitening and brightening products. The website was custom-built with Next.js, React, and Supabase to provide a fast, interactive product showcase with a secure backend for product management and authenticity verification.',
      objectives: [
        'Develop a full stack product showcase platform using Next.js and Supabase',
        'Implement admin dashboard with CRUD for managing products and content',
        'Add product authenticity verification using unique product codes (e.g., valid123)',
        'Ensure a fast, responsive, and SEO-friendly user experience for the UAE market',
      ],
      techStack: ['Next.js', 'React', 'Supabase', 'Tailwind CSS'],
      images: ['/images/work-single/23.webp', '/images/work-single/24.webp'],
      testimonial: {
        quote: 'The custom-built site gave us full control over our product catalogue and authenticity system — a true step forward for our brand.',
        author: 'St. Dalfour Cream UAE',
        role: 'Marketing Manager',
      },
    },
    {
      slug: 'vipers-footwear',
      title: 'Vipers Footwear',
      category: 'E-commerce Website',
      link: 'https://vipers.in/',
      client: 'Vipers',
      year: '2024',
      overview: 'Vipers is a minimalist footwear brand specializing in barefoot shoes and accessories. The website delivers a clean, performance-driven interface focusing on direct-to-consumer retail.',
      objectives: [
        'Build a high-performing e-commerce site optimized for niche footwear',
        'Highlight product benefits and barefoot lifestyle philosophy',
        'Ensure fast product filtering and checkout experience',
        'Design a layout that aligns with premium athletic branding',
      ],
      techStack: ['WordPress', 'WooCommerce', 'Elementor', 'CSS', 'JavaScript'],
      images: ['/images/work-single/25.webp', '/images/work-single/26.webp'],
      testimonial: {
        quote: 'Our niche footwear customers love the website\'s clean and functional look — it fits our identity perfectly.',
        author: 'Vipers Team',
        role: 'Brand Representative',
      },
    },
    {
      slug: 'my-city-help',
      title: 'My City Help',
      category: 'Full Stack Web App',
      link: 'https://mycityhelp.vercel.app/',
      client: 'Personal Project',
      year: '2025',
      overview: 'My City Help is a functional MVP for tracking and managing civic complaints. Built using Next.js and MongoDB, it provides users with an interactive dashboard for reporting and resolving local issues.',
      objectives: [
        'Build a scalable Next.js-based complaint tracking app',
        'Implement authentication and user roles for admins and users',
        'Enable CRUD operations for complaints and updates',
        'Host as a working SaaS-style prototype on Vercel',
      ],
      techStack: ['Next.js', 'React', 'MongoDB', 'Node.js', 'Tailwind CSS'],
      images: ['/images/work-single/3.webp', '/images/work-single/4.webp'],
      testimonial: {
        quote: 'An experimental project that strengthened my backend skills and understanding of real-world scalability.',
        author: 'Arfath Momin',
        role: 'Developer & Designer',
      },
    },
    {
      slug: 'hotel-management-web-app',
      title: 'Hotel Management Web App',
      category: 'Full Stack Web App',
      link: 'https://momins-hotel.vercel.app/',
      client: 'Personal Project',
      year: '2025',
      overview: 'A demo hotel booking platform showcasing full stack development capabilities. Built with Next.js, MongoDB, and Tailwind CSS, it demonstrates CRUD operations, room listings, and dynamic admin control.',
      objectives: [
        'Create a scalable hotel booking web app',
        'Design an intuitive interface for room browsing and management',
        'Implement admin-side CRUD operations and booking logic',
        'Deploy live demo showcasing MERN stack proficiency',
      ],
      techStack: ['Next.js', 'MongoDB', 'React', 'Tailwind CSS', 'Node.js'],
      images: ['/images/work-single/11.webp', '/images/work-single/12.webp'],
      testimonial: {
        quote: 'A perfect example of my approach to building full stack solutions with clean UI and practical logic.',
        author: 'Arfath Momin',
        role: 'Full Stack Developer',
      },
    },
  ];

  // Find the current work by slug
  const work = works.find(w => w.slug === params.slug) || works[0];

  return (
    <>
      <Header />

      {/* Project Details */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2">
              <motion.div 
                className="subtitle text-sm font-semibold text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Project Details
              </motion.div>
            </div>

            <div className="lg:col-span-10">
              <div className="space-y-12">
                {/* Overview & Objectives */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                >
                  <div>
                    <h4 className="text-2xl font-bold mb-4">Overview</h4>
                    <p className="text-gray-300 leading-relaxed">{work.overview}</p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-4">Objectives</h4>
                    <ul className="space-y-2">
                      {work.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="text-white mt-1">•</span>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-gray-800"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                >
                  <div>
                    <h6 className="text-sm font-bold text-gray-400 mb-2">Category</h6>
                    <p className="text-white">{work.category}</p>
                  </div>
                  <div>
                    <h6 className="text-sm font-bold text-gray-400 mb-2">Tech Stack</h6>
                    <p className="text-white">{work.techStack.join(', ')}</p>
                  </div>
                  <div>
                    <h6 className="text-sm font-bold text-gray-400 mb-2">Client</h6>
                    <p className="text-white">{work.client}</p>
                  </div>
                  <div>
                    <h6 className="text-sm font-bold text-gray-400 mb-2">Year</h6>
                    <p className="text-white">{work.year}</p>
                  </div>
                </motion.div>

                {/* Visit Website Button - reduced vertical space on mobile */}
                {work.link && (
                  <motion.div
                    className="flex justify-center pt-4 md:pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  >
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold text-sm md:text-base"
                    >
                      Visit Live Website
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2">
              <motion.div 
                className="subtitle text-sm font-semibold text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Client Says
              </motion.div>
            </div>
            <div className="lg:col-span-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  {work.testimonial.quote}
                </h2>
                <p className="text-gray-400 text-lg">
                  {work.testimonial.author}, {work.testimonial.role}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Works */}
      <section className="no-top py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link 
              href="/works"
              className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
            >
              ← Back to Works
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
