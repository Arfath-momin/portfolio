'use client';

import Image from 'next/image';
import * as motion from 'motion/react-client';

export default function Testimonial({ image, name, role, quote, delay = 0 }) {
  return (
    <motion.div
      className="de_testi s2"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      <blockquote className="bg-gray-900 p-6 rounded-xl">
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.2, ease: "easeOut" }}
        >
          <div className="font-semibold text-white text-lg mb-1">{name}</div>
          <span className="text-sm text-gray-400">{role}</span>
        </motion.div>
        <motion.p 
          className="text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.3, ease: "easeOut" }}
        >
          "{quote}"
        </motion.p>
      </blockquote>
    </motion.div>
  );
}
