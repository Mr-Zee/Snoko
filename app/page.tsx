
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import InvestorSection from '@/components/InvestorSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import OurStorySection from '@/components/OurStory';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <OurStorySection />
      <GallerySection />
      <InvestorSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
