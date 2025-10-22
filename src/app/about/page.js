'use client';

import Image from 'next/image';
import * as motion from 'motion/react-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Counter from '@/components/Counter';
import Testimonial from '@/components/Testimonial';

export default function About() {
  const stats = [
    { end: 4, label: 'Years of Experience', delay: 0 },
    { end: 20, label: 'Projects Done', delay: 0.2 },
    { end: 16, label: 'Live Websites', delay: 0.4 },
    { end: 6, label: 'Tech Stacks Mastered', delay: 0.6 },
  ];

  const skills = [
    { name: 'WordPress', image: '/images/logo/wordpress.webp', delay: 0.4 },
    { name: 'Next.js', image: '/images/logo/nextjs.png', delay: 0.5 },
    { name: 'React.js', image: '/images/logo/reactjs.webp', delay: 0.6 },
    { name: 'Canva', image: '/images/logo/canva.png', delay: 0.7 },
  ];

  const testimonials = [
    {
      name: 'Jayce Ergonomics',
      role: 'Corporate Client',
      quote: 'Our new website looks professional and fast. Arfath handled the entire process smoothly — from design to delivery.',
    },
    {
      name: 'Stoned Monkey India',
      role: 'E-commerce Brand',
      quote: 'The store\'s design is exactly what we envisioned — clean, trendy, and optimized. A great experience working with Arfath.',
    },
    {
      name: 'Canyon Talent',
      role: 'Recruitment Agency',
      quote: 'Our recruitment website now feels more refined and accessible. Arfath delivered everything we asked for on time.',
    },
  ];

  return (
    <>
      <Header />

      {/* Who I Am Section */}
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
                Who I Am
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
                Crafting websites that connect design, performance, and functionality — built to help businesses grow online.
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-gray-300">
                  Hi, I&apos;m Arfath Momin — a web developer specializing in WordPress and Full Stack (MERN) projects. I enjoy building functional, clean, and user-friendly websites that bring ideas to life for brands and individuals.
                </p>
                <p className="text-gray-300">
                  Over the past 3+ years, I&apos;ve built multiple websites for clients across industries — from e-commerce to corporate profiles. I focus on crafting fast, SEO-optimized, and visually consistent sites using modern web tools and frameworks.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills Section */}
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
                My Skills
              </motion.div>
            </div>
            <div className="lg:col-span-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: skill.delay, ease: "easeOut" }}
                  >
                    <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-semibold">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                Experience
              </motion.div>
            </div>
            <div className="lg:col-span-10">
              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              >
                Freelance web development projects — building websites for various clients, from e-commerce stores to portfolio websites, focusing on performance, design, and usability.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                What Clients Say
              </motion.div>
            </div>
            <div className="lg:col-span-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Testimonial key={index} {...testimonial} delay={0.4 + index * 0.1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Counter key={index} end={stat.end} label={stat.label} delay={stat.delay} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
