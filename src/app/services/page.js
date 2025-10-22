'use client';

import * as motion from 'motion/react-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      title: 'Custom Website Design',
      description:
        "Tailoring modern, responsive websites that reflect your brand's identity and deliver a seamless user experience.",
      delay: 0.4,
    },
    {
      title: 'E-commerce Website',
      description:
        'Developing user-friendly online stores with secure payment gateways and smooth checkout processes.',
      delay: 0.5,
    },
    {
      title: 'Landing Page Design',
      description:
        'Designing high-conversion landing pages optimized for marketing campaigns and lead generation.',
      delay: 0.6,
    },
    {
      title: 'Front-end Development',
      description:
        'Implementing clean, interactive, and responsive interfaces using HTML, CSS, JavaScript, and React.',
      delay: 0.7,
    },
    {
      title: 'Back-end Development',
      description:
        'Building robust and scalable back-end systems using Node.js, PHP, or Supabase for dynamic functionality.',
      delay: 0.8,
    },
    {
      title: 'Content Management System',
      description:
        'Customizing and integrating WordPress CMS for easy updates, scalability, and content management.',
      delay: 0.9,
    },
    {
      title: 'Website Optimization',
      description:
        'Enhancing website speed, SEO, and performance to ensure top search rankings and smooth user experience.',
      delay: 1.0,
    },
    {
      title: 'Website Audits',
      description:
        'Conducting in-depth audits to identify performance, design, and SEO improvement opportunities.',
      delay: 1.1,
    },
    {
      title: 'Content Strategy & Creation',
      description:
        'Crafting effective content strategies and web copy that align with your goals and improve engagement.',
      delay: 1.2,
    },
    {
      title: 'Social Media Integration',
      description:
        'Integrating social media features to enhance visibility, engagement, and sharing across platforms.',
      delay: 1.3,
    },
  ];

  return (
    <>
      <Header />

      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: service.delay, ease: "easeOut" }}
                >
                  <h4 className="text-2xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
