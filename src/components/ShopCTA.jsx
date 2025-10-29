import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function ShopCTA() {
  return (
    <section id="shop" className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-8 rounded-3xl border border-white/60 bg-gradient-to-br from-white to-white/70 p-8 shadow-lg backdrop-blur">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Sip the summit</h2>
            <p className="mt-3 text-slate-600">Treat yourself to luxury hydration. Each bottle ships in eco-friendly packaging with a chilled, mountain-fresh finish.</p>
          </div>
          <div className="flex flex-wrap gap-4 sm:justify-end">
            <RippleButton />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Himalayan Rose Water — Crafted with serenity</p>
      </div>
    </section>
  );
}

function RippleButton() {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y }]);
    setTimeout(() => setRipples((r) => r.filter((i) => i.id !== id)), 700);
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-rose-500 to-sky-500 px-6 py-3 text-white shadow-lg transition hover:brightness-[1.05] focus:outline-none focus:ring-2 focus:ring-rose-200"
    >
      <ShoppingBag className="h-5 w-5" />
      <span className="font-medium">Add to Cart</span>
      {/* Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40"
          style={{ left: r.x, top: r.y, width: 10, height: 10, animation: 'ripple 700ms ease-out forwards' }}
        />
      ))}
      <style>{`
        @keyframes ripple {
          from { transform: translate(-50%, -50%) scale(1); opacity: 0.9; }
          to { transform: translate(-50%, -50%) scale(16); opacity: 0; }
        }
      `}</style>
    </button>
  );
}
