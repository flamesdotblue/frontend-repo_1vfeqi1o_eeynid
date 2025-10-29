import React from 'react';
import HeroScene from './components/HeroScene';
import AboutSection from './components/AboutSection';
import IngredientsAndBenefits from './components/IngredientsAndBenefits';
import ShopCTA from './components/ShopCTA';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900">
      <Navbar />
      <HeroScene />
      <AboutSection />
      <IngredientsAndBenefits />
      <ShopCTA />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-rose-400 to-sky-400" />
          <span className="text-sm font-semibold tracking-wide text-slate-800">HIMALAYAN ROSE</span>
        </a>
        <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#ingredients" className="hover:text-slate-900">Ingredients</a>
          <a href="#shop" className="hover:text-slate-900">Shop</a>
        </nav>
      </div>
    </header>
  );
}
