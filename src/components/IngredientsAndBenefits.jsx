import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Droplet, Sparkles, Flower2 } from 'lucide-react';

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  return (
    <motion.div
      ref={ref}
      className="relative rounded-3xl border border-white/60 bg-white/60 p-6 shadow-lg backdrop-blur-md"
      style={{ perspective: 1000 }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(Math.max(-50, Math.min(50, dx / 4)));
        y.set(Math.max(-50, Math.min(50, dy / 4)));
      }}
      onMouseLeave={() => {
        animate(x, 0, { type: 'spring', stiffness: 150, damping: 12 });
        animate(y, 0, { type: 'spring', stiffness: 150, damping: 12 });
      }}
    >
      <motion.div style={{ rotateX, rotateY }} className="grid gap-4">
        {children}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-50/40 to-sky-50/40" />
    </motion.div>
  );
}

export default function IngredientsAndBenefits() {
  const [active, setActive] = useState('rose');

  const items = [
    {
      key: 'rose',
      label: 'Rose Petals',
      icon: Flower2,
      desc: 'Damask rose essence for a soft floral lift and calming aroma.',
      color: 'from-rose-500 to-rose-400',
    },
    {
      key: 'glacier',
      label: 'Glacier Water',
      icon: Droplet,
      desc: 'Pristine mineral balance for clean, crisp hydration.',
      color: 'from-sky-500 to-sky-400',
    },
    {
      key: 'minerals',
      label: 'Trace Minerals',
      icon: Sparkles,
      desc: 'Naturally occurring electrolytes that refresh and restore.',
      color: 'from-indigo-500 to-cyan-400',
    },
  ];

  return (
    <section id="ingredients" className="relative bg-gradient-to-b from-white to-[#f7fbff] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Ingredients unveiled, benefits revealed
          </motion.h2>
          <motion.p
            className="mt-3 text-slate-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            Explore the essence of our bottle. Tap each highlight to discover what makes the sip so serene.
          </motion.p>
        </div>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          {/* Interactive bottle with hotspots */}
          <TiltCard>
            <div className="relative mx-auto aspect-[2/4] w-56 sm:w-64">
              {/* Bottle silhouette */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/70 bg-gradient-to-b from-white/80 to-white/40 shadow-inner" />
              <div className="absolute inset-x-3 bottom-6 top-24 rounded-2xl bg-gradient-to-b from-white/30 to-white/50" />

              {/* Hotspots */}
              <Hotspot
                top="18%"
                left="50%"
                active={active === 'rose'}
                onClick={() => setActive('rose')}
                color="rose"
              />
              <Hotspot
                top="50%"
                left="50%"
                active={active === 'glacier'}
                onClick={() => setActive('glacier')}
                color="sky"
              />
              <Hotspot
                top="78%"
                left="50%"
                active={active === 'minerals'}
                onClick={() => setActive('minerals')}
                color="indigo"
              />
            </div>
          </TiltCard>

          {/* Details + benefits */}
          <div className="grid gap-6">
            {items.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`group flex w-full items-start gap-4 rounded-2xl border bg-white/70 p-5 text-left shadow-sm backdrop-blur transition ${
                  active === item.key
                    ? 'border-rose-200/70'
                    : 'border-white/70 hover:border-rose-100'
                }`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div
                  className={`mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">{item.label}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  {active === item.key && (
                    <motion.div
                      className="mt-3 flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {[
                        { k: 'hydration', label: 'Hydration' },
                        { k: 'glow', label: 'Skin Glow' },
                        { k: 'fresh', label: 'Refreshing' },
                      ].map((chip) => (
                        <span
                          key={chip.k}
                          className="inline-flex items-center rounded-full border border-rose-100/60 bg-rose-50/40 px-3 py-1 text-xs text-rose-700"
                        >
                          {chip.label}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Hotspot({ top, left, active, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
      aria-label="Reveal ingredient"
    >
      <span
        className={`block h-4 w-4 rounded-full ring-2 ring-white shadow transition ${
          active ? 'scale-110' : ''
        } ${color === 'rose' ? 'bg-rose-500' : color === 'sky' ? 'bg-sky-500' : 'bg-indigo-500'}`}
      />
      <span
        className={`pointer-events-none absolute inset-0 -z-[0] rounded-full opacity-70 blur-md ${
          color === 'rose'
            ? 'bg-rose-400/40'
            : color === 'sky'
            ? 'bg-sky-400/40'
            : 'bg-indigo-400/40'
        }`}
      />
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-full"
        animate={{ scale: active ? [1, 1.6, 1] : 1 }}
        transition={{ duration: 1.6, repeat: active ? Infinity : 0, ease: 'easeInOut' }}
        style={{ boxShadow: '0 0 0 10px rgba(255,255,255,0.6)' }}
      />
    </button>
  );
}
