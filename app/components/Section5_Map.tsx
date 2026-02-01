'use client';
import { motion } from 'framer-motion';
import { MapPin, Train, Bus, Car } from 'lucide-react';

const Section5_Map = () => {
  return (
    <section className="snap-section flex flex-col justify-center pb-10">
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="w-full max-w-md px-6 mx-auto"
      >
        <h2 className="text-xl font-bold mb-6 text-starlight text-center">오시는 길</h2>
        
        <div className="bg-white text-cosmic-900 p-5 rounded-2xl shadow-xl mb-6 text-center">
            <h3 className="text-lg font-bold mb-1">호텔나루서울 엠갤러리</h3>
            <div className="flex items-center justify-center gap-1 text-gray-600 mb-4 text-xs bg-gray-100 py-2 rounded-lg">
                <MapPin size={14} className="text-accent"/> <span>서울 마포구 마포대로 8</span>
            </div>
            
            <div className="w-full h-40 bg-gray-200 rounded-xl mb-3 flex items-center justify-center text-xs text-gray-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-cosmic-900/10"></div>
                지도 영역
            </div>

            <div className="flex gap-2">
                <a href="https://map.kakao.com/link/search/호텔나루서울엠갤러리" target="_blank" className="flex-1 py-3 bg-[#FEE500] text-black rounded-lg font-bold text-xs">카카오맵</a>
                <a href="https://map.naver.com/v5/search/호텔나루서울엠갤러리" target="_blank" className="flex-1 py-3 bg-[#03C75A] text-white rounded-lg font-bold text-xs">네이버지도</a>
                <a href="https://surl.tmobiapi.com/search/호텔나루서울엠갤러리" target="_blank" className="flex-1 py-3 bg-[#2c86d3] text-white rounded-lg font-bold text-xs">티맵</a>
            </div>
        </div>

        <div className="space-y-3 text-cream/90 text-xs px-2">
            <div className="flex gap-3 items-start bg-cosmic-900/40 p-3 rounded-xl border border-white/5">
                <Train size={16} className="text-starlight shrink-0" />
                <div><strong className="block text-starlight mb-1">지하철</strong>5호선 마포역 4번 출구 도보 3분</div>
            </div>
             <div className="flex gap-3 items-start bg-cosmic-900/40 p-3 rounded-xl border border-white/5">
                <Bus size={16} className="text-starlight shrink-0" />
                <div><strong className="block text-starlight mb-1">버스</strong>'마포역' 정류장 하차 (간선 160, 260 등)</div>
            </div>
             <div className="flex gap-3 items-start bg-cosmic-900/40 p-3 rounded-xl border border-white/5">
                <Car size={16} className="text-starlight shrink-0" />
                <div><strong className="block text-starlight mb-1">주차</strong>호텔 내 주차장 (하객 3시간 무료)</div>
            </div>
        </div>
      </motion.div>
      
      <footer className="absolute bottom-4 w-full text-center text-[10px] text-cream/30">
        2026.04.18 박형묵 & 문원영 Wedding Day
      </footer>
    </section>
  );
};
export default Section5_Map;