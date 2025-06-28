import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MusiciansSection from '@/components/MusiciansSection';
import AlbumsSection from '@/components/AlbumsSection';
import EventsSection from '@/components/EventsSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Na'am Grupo - Meresapi Kedamaian Lewat Nada dan Dzikir</title>
        <meta name="description" content="Na'am Grupo adalah grup musik religi sufi yang membawa pesan ketenangan, cinta ilahi, dan harmoni. Dengarkan karya kami, lihat jadwal event, dan jalin kolaborasi." />
        <meta name="keywords" content="Na'am Grupo, musik sufi, musik religi, islam, spiritual, harmoni, cinta ilahi" />
        <meta property="og:title" content="Na'am Grupo - Meresapi Kedamaian Lewat Nada dan Dzikir" />
        <meta property="og:description" content="Jelajahi dunia musik spiritual Na'am Grupo. Temukan kedamaian dalam setiap nada." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-teal-900 to-emerald-950 text-foreground islamic-pattern">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <MusiciansSection />
          <AlbumsSection />
          <EventsSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;