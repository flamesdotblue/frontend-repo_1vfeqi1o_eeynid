import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Flower2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
      {/* Background ripple and glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(173,216,230,0.25),rgba(255,255,255,0))] blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h2
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Sourced where glaciers meet roses
            </motion.h2>
            <motion.p
              className="mt-4 text-slate-600"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            >
              Crafted at high altitude using pristine glacier water and hand-harvested Himalayan roses, our rose water drink is distilled for clarity, balance, and an unmistakable floral finish. Each bottle captures the serenity of alpine dawn.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[{
                icon: Mountain,
                title: 'Glacial purity',
                text: 'Filtered by ancient stone, delivering clean, mineral-rich freshness.',
              }, {
                icon: Flower2,
                title: 'Hand-picked roses',
                text: 'Delicate petals harvested at first light for peak aroma and bloom.',
              }].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-white/60 bg-gradient-to-br from-white to-white/60 p-5 shadow-sm backdrop-blur"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
                >
                  <div className="flex items-start gap-3">
                    <item.icon className="h-6 w-6 text-rose-500" />
                    <div>
                      <h3 className="font-medium text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated illustration */}
          <motion.div
            className="relative h-80 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Glacier silhouette */}
            <motion.div
              className="absolute inset-x-0 bottom-0 h-40 rounded-t-[60%] bg-gradient-to-t from-[#e6f4ff] to-white"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute left-10 bottom-16 h-28 w-40 rotate-[-8deg] rounded-lg bg-gradient-to-br from-[#eaf6ff] to-[#ffffff] shadow"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute right-8 bottom-10 h-20 w-28 rotate-[6deg] rounded-lg bg-gradient-to-br from-[#fdf2f8] to-white shadow"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Rose bloom */}
            <motion.div
              className="absolute right-1/2 top-6 h-16 w-16 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,182,193,0.6),rgba(255,182,193,0.15),transparent)]"
              initial={{ scale: 0.8, opacity: 0.6 }}
              animate={{ scale: [0.8, 1.05, 1], opacity: [0.6, 0.9, 0.75] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
