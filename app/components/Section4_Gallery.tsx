'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

const Section4_Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    '/images/wedding/gallery-1.jpg',
    '/images/wedding/gallery-2.jpg',
    '/images/wedding/gallery-3.jpg',
    '/images/wedding/gallery-4.jpg',
    '/images/wedding/gallery-5.jpg',
    '/images/wedding/gallery-6.jpg',
    '/images/wedding/gallery-7.jpg',
    '/images/wedding/gallery-8.jpg',
  ];

  return (
    <section className="snap-section flex flex-col justify-center relative">
      <div className="px-6 mb-4 text-center">
        <p className="text-accent text-xs font-bold tracking-widest mb-1">GALLERY</p>
        <h2 className="text-xl font-bold text-starlight">우리의 아름다운 순간</h2>
      </div>

      <div className="w-full max-w-lg px-6 mx-auto">
        <div className="grid grid-cols-4 gap-2"> 
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(src)}
              className="relative aspect-[3/4] cursor-pointer rounded-md overflow-hidden border border-white/10 group shadow-md"
            >
              <Image
                src={src}
                alt={`Wedding Photo ${index}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 25vw, 15vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <p className="text-center text-[10px] text-cream/40 mt-6">Touch to Expand</p>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          >
            <button className="absolute top-6 right-6 text-white/80 p-2 z-50"><X size={32} /></button>
            <motion.div
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              className="relative w-full h-full max-w-3xl max-h-[80vh]"
            >
              <Image src={selectedImage} alt="Enlarged" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Section4_Gallery;