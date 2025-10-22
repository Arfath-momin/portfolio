'use client';

import Image from "next/image";
import * as motion from "motion/react-client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";
import BlogCard from "@/components/BlogCard";
import WorkCard from "@/components/WorkCard";

export default function Home() {
  const stats = [
    { end: 4, label: 'Years of Experience', delay: 0 },
    { end: 20, label: 'Projects Done', delay: 0.2 },
    { end: 16, label: 'Live Websites', delay: 0.4 },
    { end: 6, label: 'Tech Stacks Mastered', delay: 0.6 },
  ];

const services = [
  { title: 'WordPress Development', description: 'Custom websites, themes, and plugins tailored for unique business goals.', delay: 0.4 },
  { title: 'E-commerce Websites', description: 'Developing user-friendly online stores with secure payment gateways and smooth checkout processes.', delay: 0.5 },
  { title: 'Frontend Development', description: 'Implementing clean, interactive, and responsive interfaces using HTML, CSS, JavaScript, and React.', delay: 0.6 },
  { title: 'Full Stack Web Apps', description: 'Scalable web applications built with Next.js, Node.js, and MongoDB.', delay: 0.7 },
  { title: 'Website Optimization', description: 'Enhancing website speed, SEO, and performance to ensure top search rankings and smooth user experience.', delay: 0.8 },
  { title: 'UI/UX Design', description: 'Creating visually appealing, easy-to-navigate designs for better engagement.', delay: 0.9 },
];


  const works = [
    { image: '/images/works/the-arpra.jpg', title: 'The ARPRA', category: 'E-COMMERCE WEBSITE', year: '2025', slug: 'the-arpra', delay: 0.5 },
    { image: '/images/works/stoned-monkey.jpg', title: 'Stoned Monkey India', category: 'E-COMMERCE WEBSITE', year: '2024', slug: 'stoned-monkey-india', delay: 0.6 },
    { image: '/images/works/mycityhelp.jpg', title: 'My City Help', category: 'FULL STACK WEB APP', year: '2025', slug: 'my-city-help', delay: 0.7 },
  ];


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

      {/* Hero Section */}
      <section className="no-top py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 lg:mb-0"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <motion.div 
                className="subtitle text-sm font-semibold mb-4 text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Available for Work
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white text-condensed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                A Full Stack & WordPress Developer from India
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
  I build dynamic, responsive websites that blend modern design with smooth functionality — turning creative ideas into fast, scalable digital experiences.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <a 
                  className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                  href="/about"
                >
                  About Me
                </a>
                <a 
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all duration-300"
                  href="/arfath_fullstack_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                  Download CV
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
           
                 <Image
                src="/images/misc/arfathmominportrait.jpg"
                alt="Arfath Momin"
                width={500}
                height={1000}
                className="w-full h-auto rounded-lg object-cover mx-auto"
                priority
                sizes="(min-width:1024px) 40vw, 80vw"
                

              />
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <Counter key={index} end={stat.end} label={stat.label} delay={stat.delay} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2">
              <motion.div 
                className="subtitle text-sm font-semibold text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                About Me
              </motion.div>
            </div>
            <div className="lg:col-span-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
  Building websites that connect design, performance, and purpose through clean code and creative structure.
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-gray-300">
  Hi, I’m Arfath Momin — a Full Stack and WordPress Developer with 4+ years of experience crafting digital solutions for brands and businesses. I specialize in creating custom WordPress sites, e-commerce stores, and full-stack web apps using the MERN stack.
                </p>
                <p className="text-gray-300">
  From clean frontend design to seamless backend logic, I focus on delivering websites that are fast, user-friendly, and built to last. Every project is a balance between creativity and functionality — where ideas become interactive, impactful results.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="p-8 h-full bg-cover bg-center rounded-lg relative overflow-hidden min-h-[300px] flex items-center justify-center">
                <Image
                  src="/images/misc/2.webp"
                  alt="What I Do"
                  fill
                  className="object-cover"
                
                />
                <h3 className="relative z-10 text-4xl font-bold">What I Do</h3>
              </div>
            </motion.div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: service.delay, ease: "easeOut" }}
                  >
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-2">
              <motion.div 
                className="subtitle text-sm font-semibold text-gray-400 ms-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Works
              </motion.div>
            </div>
            <div className="lg:col-span-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
  A collection of projects that showcase my approach to modern web design — where code meets creativity and performance meets precision.
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="text-white no-top py-8 overflow-hidden">
        {/* responsive marquee: duplicate content for smooth looping and scale text across breakpoints */}
        <motion.div
          className="flex items-center whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* two copies to create a seamless loop */}
          <div className="flex gap-8 items-center mr-12">
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">WORDPRESS DEVELOPMENT</span>
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">FULLSTACK WEB DEVELOPMENT</span>
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">E-COMMERCE WEBSITE</span>
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">UI/UX DESIGN</span>
          </div>

          <div className="flex gap-8 items-center">
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">WORDPRESS DEVELOPMENT</span>
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">FULLSTACK WEB DEVELOPMENT</span>
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">E-COMMERCE WEBSITE</span>
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">UI/UX DESIGN</span>
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2">
              <motion.div 
                className="subtitle text-sm font-semibold text-gray-400 ms-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                From the Blog
              </motion.div>
            </div>
            <div className="lg:col-span-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {blogs.map((blog, index) => (
                  <BlogCard key={index} {...blog} />
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
