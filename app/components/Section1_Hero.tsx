'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Section1_Hero = () => {
  return (
    <section className="snap-section relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png" 
          alt="Main Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

     
      
      {/* 스크롤 화살표 */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 z-20 text-cream/50"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
};
export default Section1_Hero;