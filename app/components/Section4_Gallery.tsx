'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/wedding/gallery-1.jpg', '/images/wedding/gallery-2.jpg', '/images/wedding/gallery-3.jpg',
  '/images/wedding/gallery-4.jpg', '/images/wedding/gallery-5.jpg', '/images/wedding/gallery-6.jpg',
  '/images/wedding/gallery-7.jpg', '/images/wedding/gallery-8.jpg',
];

const Section4_Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + dir + images.length) % images.length);
  };

  return (
    <section className="snap-section">
      <div className="w-full max-w-md px-6 mx-auto">
        <div className="mb-6 text-center">
          <p className="text-accent text-xs font-bold tracking-widest mb-1">GALLERY</p>
          <h2 className="text-xl font-bold text-starlight">우리의 아름다운 순간</h2>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, i) => (
            <div key={i} onClick={() => setSelectedIndex(i)} className="relative aspect-[3/4] cursor-pointer rounded-md overflow-hidden border border-white/10 shadow-md">
              <Image src={src} alt="thumb" fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm" onClick={() => setSelectedIndex(null)}>
            <button className="absolute top-6 right-6 text-white"><X size={32} /></button>
            <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 text-white/50 p-2"><ChevronLeft size={40} /></button>
            <button onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-4 text-white/50 p-2"><ChevronRight size={40} /></button>
            
            <motion.div key={selectedIndex} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="relative w-full h-[70vh]" onClick={(e) => e.stopPropagation()}>
              <Image src={images[selectedIndex]} alt="full" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Section4_Gallery;