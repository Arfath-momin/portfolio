'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'motion/react-client';

export default function WorkCard({ image, title, category, year, slug, delay = 0 }) {
  return (
    <motion.div
      className="hover relative overflow-hidden text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <Link href={`/works/${slug}`} className="overflow-hidden block relative group">
        <motion.h2 
          className="text-4xl font-bold absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full "
          style={{
            textShadow: '0 0 5px rgba(82, 82, 82, 0.7)',
            
          }}
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {title}
        </motion.h2>
        
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={800}
            className="w-full h-auto"
          />
        </motion.div>

        <div className="absolute bottom-0 w-full p-4 flex text-white justify-between bg-gradient-to-t from-black/60 to-transparent">
          <div className="d-tag-s2 text-xs font-semibold uppercase tracking-wider">{category}</div>
          <div className="font-bold">{year}</div>
        </div>
      </Link>
    </motion.div>
  );
}
