'use client';

import * as motion from 'motion/react-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkCard from '@/components/WorkCard';

export default function Works() {
  const works = [
    { image: '/images/works/the-arpra.jpg', title: 'The ARPRA', category: 'E-COMMERCE WEBSITE', year: '2025', slug: 'the-arpra', delay: 0.3 },
    { image: '/images/works/stoned-monkey.jpg', title: 'Stoned Monkey India', category: 'E-COMMERCE WEBSITE', year: '2024', slug: 'stoned-monkey-india', delay: 0.4 },
    { image: '/images/works/jayce-ergonomics.jpg', title: 'Jayce Ergonomics', category: 'CORPORATE WEBSITE', year: '2024', slug: 'jayce-ergonomics', delay: 0.5 },
    { image: '/images/works/canyontalent.jpg', title: 'Canyon Talent', category: 'CORPORATE WEBSITE', year: '2024', slug: 'canyon-talent', delay: 0.6 },
    { image: '/images/works/daschiff.jpg', title: 'Daschiff by Neeraj Pandey', category: 'E-COMMERCE WEBSITE', year: '2023', slug: 'daschiff', delay: 0.7 },
    { image: '/images/works/jetsuds.jpg', title: 'JetSuds AutoSpa', category: 'SERVICE WEBSITE', year: '2023', slug: 'jetsuds-autospa', delay: 0.8 },
    { image: '/images/works/lavesh-export.jpg', title: 'Lavesh Exports', category: 'CORPORATE WEBSITE', year: '2024', slug: 'lavesh-exports', delay: 0.9 },
    { image: '/images/works/seapride-exims.jpg', title: 'Seapride Exims', category: 'CORPORATE WEBSITE', year: '2024', slug: 'seapride-exims', delay: 1.0 },
    { image: '/images/works/merchant-design.jpg', title: 'Merchant Design', category: 'PORTFOLIO WEBSITE', year: '2024', slug: 'merchant-design', delay: 1.1 },
    { image: '/images/works/st-dalfor.jpg', title: 'St. Dalfour Cream UAE', category: 'FULL STACK WEB APP', year: '2024', slug: 'st-dalfour-cream-uae', delay: 1.2 },
    { image: '/images/works/vipers.jpg', title: 'Vipers Footwear', category: 'E-COMMERCE WEBSITE', year: '2024', slug: 'vipers-footwear', delay: 1.3 },
    { image: '/images/works/mycityhelp.jpg', title: 'My City Help', category: 'FULL STACK WEB APP', year: '2025', slug: 'my-city-help', delay: 1.4 },
    { image: '/images/works/momins-hotel.jpg', title: 'Hotel Management Web App', category: 'FULL STACK WEB APP', year: '2025', slug: 'hotel-management-web-app', delay: 1.5 },
  ];

  return (
    <>
      <Header />

      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
