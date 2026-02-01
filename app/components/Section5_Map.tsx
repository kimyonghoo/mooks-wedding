'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const Section5_Map = () => {
  return (
    <section className="snap-section flex flex-col justify-center bg-cosmic-900 pb-10">
      <motion.div className="w-full max-w-md px-6 mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-starlight text-center">오시는 길</h2>
        
        <div className="bg-white text-black p-6 rounded-2xl shadow-xl mb-6">
            <h3 className="text-xl font-bold mb-1">호텔나루서울 엠갤러리</h3>
            <p className="text-gray-500 text-sm mb-4">서울 마포구 마포대로 8</p>
            
            {/* 지도 영역 (이미지나 API 연동) */}
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500 text-sm">
                지도 영역
            </div>

            <div className="flex gap-2">
                <a href="https://map.kakao.com/link/search/호텔나루서울엠갤러리" className="flex-1 py-3 bg-[#FEE500] text-black rounded-lg font-bold text-xs text-center">카카오맵</a>
                <a href="https://map.naver.com/v5/search/호텔나루서울엠갤러리" className="flex-1 py-3 bg-[#03C75A] text-white rounded-lg font-bold text-xs text-center">네이버지도</a>
            </div>
        </div>

        <div className="text-gray-300 text-sm space-y-4 px-2">
            <div>
                <strong className="text-white block mb-1">지하철</strong>
                5호선 마포역 4번 출구 도보 3분
            </div>
            <div>
                <strong className="text-white block mb-1">주차</strong>
                호텔 내 지하주차장 이용 (하객 3시간 무료)
            </div>
        </div>
      </motion.div>
      
      <footer className="absolute bottom-4 w-full text-center text-[10px] text-gray-600">
        Copyright 2025. Hyungmook & Wonyoung. All rights reserved.
      </footer>
    </section>
  );
};
export default Section5_Map;