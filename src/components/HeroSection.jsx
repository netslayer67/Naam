import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  const handleActionClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan",
      description: "Silakan sampaikan ke tim Benerun untuk menambahkan!",
      duration: 4000,
    });
  };

  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm z-0"
      >
        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
        {/* Fallback gradient blob */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-blob" />
      </video>

      {/* Konten */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight mb-6 text-white drop-shadow-lg">
            Meresapi Kedamaian — <br />
            Lewat <span className="text-gold-gradient">Nada dan Dzikir</span> Na’am Grupo
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Temukan harmoni jiwa dalam alunan musik sufi yang menenangkan, membawa pesan cinta ilahi untuk hati yang merindu.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={handleActionClick}
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-4 text-lg font-semibold rounded-full shadow-md hover:scale-105 transition-all group"
            >
              <PlayCircle className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Dengarkan Sekarang
            </Button>

            <Button
              onClick={handleActionClick}
              variant="outline"
              size="lg"
              className="border border-yellow-200/50 text-yellow-200 hover:bg-yellow-200/10 hover:text-yellow-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all group hover:scale-105"
            >
              <Youtube className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Tonton di YouTube
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
