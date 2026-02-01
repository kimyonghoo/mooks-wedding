'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Section1_Hero = () => {
  return (
    // [핵심 수정 1] h-screen 대신 h-[100dvh] 사용 (모바일 주소창 대응)
    // [핵심 수정 2] justify-start로 변경하고 pt를 줘서 텍스트는 위쪽에, 그림은 아래쪽에 배치
    <section className="snap-section relative w-full h-[100dvh] flex flex-col items-center justify-start overflow-hidden">
      
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" 
          alt="Main Background"
          fill
          // [핵심 수정 3] object-bottom: 이미지가 잘려도 아랫부분(인물)은 무조건 사수함
          className="object-cover object-bottom"
          priority
        />
        {/* 상단 텍스트가 잘 보이게 위쪽만 살짝 어둡게 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* 텍스트 콘텐츠 (위쪽 여백 pt-24로 위치 조정) */}
      <div className="relative z-10 flex flex-col items-center pt-24 px-4 w-full">
        <motion.p 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
           className="text-starlight text-sm tracking-[0.5em] mb-4 uppercase font-light"
        >
          Invitation
        </motion.p>
        
        <motion.h1 
           initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
           className="text-4xl font-bold mb-4 leading-normal drop-shadow-lg text-cream"
        >
          박형묵 <span className="text-accent text-2xl">♥</span> 문원영
          <br />
          결혼합니다
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
           className="text-cream/90 text-sm font-light space-y-1 drop-shadow-md"
        >
          <p>2026년 4월 18일 토요일 오후 12시</p>
          <p>호텔나루서울 엠갤러리</p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}
           className="mt-12 text-starlight/80 text-xs italic font-light"
        >
          "내 비밀은 이거야. 아주 간단해.<br/>
          오직 마음으로 보아야 잘 보인다는 거야."
        </motion.div>
      </div>
      
      {/* 스크롤 유도 화살표 (위치를 bottom-24 정도로 올려서 하단 인물과 안 겹치게) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-24 z-20 text-white/50"
      >
        <span className="text-sm tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
};
export default Section1_Hero;