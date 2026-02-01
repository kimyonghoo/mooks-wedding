'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

const Section4_Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 12장의 사진 (4열 x 3행 = 딱 한 페이지에 들어감)
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
    <section className="snap-section flex flex-col justify-center relative bg-transparent">
      <div className="px-6 mb-4 text-center">
        <p className="text-accent text-xs font-bold tracking-widest mb-1">GALLERY</p>
        <h2 className="text-xl font-bold text-starlight">우리의 아름다운 순간</h2>
      </div>

      {/* --- 4열 그리드 갤러리 --- */}
      {/* max-w-lg: 너무 퍼지지 않게 중앙 정렬 */}
      <div className="w-full max-w-lg px-6 mx-auto">
        <div className="grid grid-cols-4 gap-3"> 
          {/* gap-3: 상자 사이 간격을 넉넉하게 줌 */}
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(src)}
              // aspect-[3/4]: 세로 직사각형 비율 유지
              // rounded-md: 모서리를 살짝 둥글게
              className="relative aspect-[3/4] cursor-pointer rounded-md overflow-hidden border border-white/10 group shadow-lg hover:border-starlight/50 transition-all"
            >
              <Image
                src={src}
                alt={`Wedding Photo ${index}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 25vw, 15vw"
              />
              {/* 반짝이는 효과 오버레이 */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <p className="text-center text-[10px] text-cream/40 mt-6">
        Touch to Expand
      </p>

      {/* --- 확대 모달 (라이트박스) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          >
            <button className="absolute top-6 right-6 text-white/80 hover:text-white p-2 z-50">
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full h-full max-w-3xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged Photo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Section4_Gallery;