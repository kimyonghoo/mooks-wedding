'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Section1_Hero = () => {
  return (
    // [수정 1] justify-start -> justify-center (내용을 화면 세로 중앙에 배치)
    <section className="snap-section relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" 
          alt="Main Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* 중앙 텍스트가 잘 보이도록 배경 전체를 살짝만 눌러줌 */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 텍스트 콘텐츠 */}
      {/* [수정 2] pt-20 제거 (위쪽 여백 없애고 정중앙 배치) */}
10      <div className="relative z- flex flex-col items-center w-full px-4">
        <motion.p 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
           className="text-starlight text-sm tracking-[0.5em] mb-4 uppercase"
        >
          Invitation
        </motion.p>
        
        <motion.h1 
           initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
           className="text-4xl font-bold mb-4 leading-normal drop-shadow-lg text-cream text-center"
        >
          박형묵 <span className="text-accent text-3xl">♥</span> 문원영
          <br />
          결혼합니다
        </motion.h1>

        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
           className="mt-8 text-starlight/90 text-xs italic font-light text-center"
        >
          "내 비밀은 이거야. 아주 간단해.<br/>
          오직 마음으로 보아야 잘 보인다는 거야."
        </motion.div>
      </div>
      
      {/* 스크롤 유도 화살표 */}
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