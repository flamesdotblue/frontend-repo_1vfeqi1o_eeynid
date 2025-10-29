import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

// Soft floating petal blob
const Petal = ({ delay = 0, left = '50%', size = 120, opacity = 0.2 }) => (
  <motion.span
    className="absolute rounded-[50%] blur-md"
    style={{
      left,
      width: size,
      height: size * 0.6,
      background:
        'radial-gradient(50% 65% at 50% 35%, rgba(255,192,203,0.6) 0%, rgba(255,182,193,0.35) 40%, rgba(255,182,193,0) 70%)',
      opacity,
    }}
    initial={{ y: 50, rotate: -10 }}
    animate={{ y: [-30, -60, -10], rotate: [0, 8, -6] }}
    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const Droplet = ({ delay = 0, left = '40%', size = 10, opacity = 0.5 }) => (
  <motion.span
    className="absolute rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    style={{ left, width: size, height: size * 1.5, opacity }}
    initial={{ y: -20, scale: 0.9 }}
    animate={{ y: [0, 12, -8, 0], scale: [1, 1.06, 0.98, 1] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

export default function HeroScene() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 600], [0, -60]);
  const mistY = useTransform(scrollY, [0, 600], [0, -30]);
  const bottleZoom = useTransform(scrollY, [0, 600], [1, 1.08]);

  // Use a stable memoized Spline URL. Replace with your own scene for production polish.
  const sceneUrl = useMemo(
    () =>
      'https://prod.spline.design/8zQ2n0ujqzU0nKqS/scene.splinecode',
    []
  );

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-[#fef6fb] via-[#eef6ff] to-white">
      {/* Background sunrise glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-20 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,192,203,0.35),rgba(255,255,255,0))] blur-3xl" />
      </div>

      {/* 3D Scene */}
      <motion.div
        className="relative h-[100svh] w-full"
        style={{ scale: bottleZoom }}
      >
        <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* Soft mist layer */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white/80 via-white/40 to-transparent"
        style={{ y: mistY }}
      />

      {/* Floating petals and droplets */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Petal delay={0} left="18%" size={140} opacity={0.28} />
        <Petal delay={1.5} left="72%" size={120} opacity={0.22} />
        <Petal delay={2.8} left="40%" size={160} opacity={0.26} />
        <Droplet delay={0.6} left="30%" size={12} opacity={0.55} />
        <Droplet delay={1.2} left="66%" size={10} opacity={0.5} />
        <Droplet delay={2.1} left="50%" size={14} opacity={0.6} />
      </div>

      {/* Content overlay */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-[100svh] items-center justify-center"
        style={{ y: titleY }}
      >
        <div className="px-6 text-center">
          <motion.h1
            className="font-[500] tracking-tight text-4xl sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-700"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Himalayan Rose Water
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-slate-600"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            From the Peaks of Purity — a serene sip of the Himalayas.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
