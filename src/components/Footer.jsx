import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan",
      description: "Anda bisa memintanya di prompt berikutnya! 🚀",
      duration: 4000,
    });
  };

  return (
    <footer className="relative py-12 bg-black/30 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <a href="#" className="text-3xl font-bold font-serif text-gold-gradient mb-4 inline-block">
            Na'am Grupo
          </a>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            Membawa harmoni, menyentuh jiwa.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <motion.button whileHover={{ scale: 1.1 }} onClick={handleSocialClick} className="text-gray-400 hover:text-gold-200 transition-colors">
              <Instagram size={24} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} onClick={handleSocialClick} className="text-gray-400 hover:text-gold-200 transition-colors">
              <Youtube size={24} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} onClick={handleSocialClick} className="text-gray-400 hover:text-gold-200 transition-colors">
              <Facebook size={24} />
            </motion.button>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Na'am Grupo. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;