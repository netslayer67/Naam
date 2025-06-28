import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video } from 'lucide-react';

const GallerySection = () => {
  const galleryItems = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1595872018818-97555653a011', alt: 'Na\'am Grupo live performance at a grand mosque' },
    { type: 'video', src: 'https://images.unsplash.com/photo-1597452489042-bc5d87937e0d', alt: 'Behind the scenes of a music video shoot' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1600488994705-287e9a39c46a', alt: 'Close-up of an oud instrument being played' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2', alt: 'Audience enjoying a spiritual concert' },
    { type: 'video', src: 'https://images.unsplash.com/photo-1616469829581-73993b3253fb', alt: 'Acoustic session in a serene garden' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad', alt: 'Na\'am Grupo in a recording studio' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="gallery" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            Galeri <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Momen</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Jejak-jejak perjalanan kami dalam menghadirkan harmoni & keindahan spiritual.
          </p>
        </motion.div>

        {/* Grid Gallery */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden group shadow-xl border border-white/10 ${index === 1 || index === 4 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              variants={itemVariants}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.src}
                alt={item.alt}
              />

              {/* Overlay Layer */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 backdrop-blur-sm" />

              {/* Icon */}
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 transition-all group-hover:scale-110">
                {item.type === 'video' ? (
                  <Video className="w-5 h-5 text-white" />
                ) : (
                  <Camera className="w-5 h-5 text-white" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
