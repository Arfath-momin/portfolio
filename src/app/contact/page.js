'use client';

import { useState } from 'react';
import * as motion from 'motion/react-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Your message has been sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    }
  };

  return (
    <>
      <Header />

      <section className="no-top py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-gray-300 mb-6">
                Whether you have a question, a project idea, or just want to say hello, I&apos;d love to hear from you. 
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400">
                <a 
                  href="tel:+918867057358" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 8867057358
                </a>
                
                <span className="hidden sm:block text-gray-600">|</span>
                
                <a 
                  href="mailto:arfathmominn@gmail.com" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  arfathmominn@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="position-relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="field-set">
                    <label className="block font-bold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="field-set">
                    <label className="block font-bold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="field-set">
                    <label className="block font-bold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="field-set h-full">
                    <label className="block font-bold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full h-[calc(100%-40px)] px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white resize-none"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <motion.button
                  type="submit"
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>

              {status.type === 'success' && (
                <motion.div
                  className="mt-6 p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </motion.div>
              )}

              {status.type === 'error' && (
                <motion.div
                  className="mt-6 p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
