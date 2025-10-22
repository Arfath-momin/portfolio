'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'motion/react-client';

export default function BlogCard({ image, category, date, title, slug, delay = 0 }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      <div className="flex gap-4 items-center">
        <motion.div 
          className="flex-shrink-0 w-24 h-24"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.1, ease: "easeOut" }}
        >
          <div className="post-image relative w-full h-full">
            <Image
              alt={title}
              src={image}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        <div className="flex-1">
          <div className="mb-2 flex flex-wrap gap-3 text-sm">
            <div className="font-bold">
              <i className="icofont-tag text-white me-2"></i>
              {category}
            </div>
            <div className="font-semibold text-gray-400">
              <i className="icofont-ui-calendar text-white me-2"></i>
              {date}
            </div>
          </div>
          <h4 className="text-lg font-semibold">
            <Link 
              href={`/blog/${slug}`}
              className="hover:text-gray-300 transition-colors"
            >
              {title}
            </Link>
          </h4>
        </div>
      </div>
    </motion.div>
  );
}
