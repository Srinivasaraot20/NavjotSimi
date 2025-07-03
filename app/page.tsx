"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Journey from '@/components/sections/Journey';
import Achievements from '@/components/sections/Achievements';
import QuickLinks from '@/components/sections/QuickLinks';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Achievements />
        <QuickLinks />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}