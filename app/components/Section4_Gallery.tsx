'use client';
import { useState } from 'react';
import { motion, AnimatePresence, PanInfo, Variants } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// 이미지 데이터 (실제 경로에 맞게 수정)
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

const Section4_Gallery = () => {
  // 현재 선택된 이미지의 인덱스 번호를 저장 (null이면 닫힌 상태)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // 애니메이션 방향 결정을 위한 상태 (1: 오른쪽, -1: 왼쪽)
  const [direction, setDirection] = useState(0);

  // 이전/다음 이미지로 인덱스를 변경하는 함수 (무한 루프 계산)
  const navigate = (newDirection: number) => {
    if (selectedIndex === null) return;
    setDirection(newDirection);
    const newIndex = (selectedIndex + newDirection + images.length) % images.length;
    setSelectedIndex(newIndex);
  };

  // 드래그가 끝났을 때 실행되는 함수 (스와이프 로직)
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50; // 스와이프 인식 최소 거리 (픽셀)
    const { offset, velocity } = info;

    // 오른쪽으로 빠르게 드래그하거나, 많이 드래그했을 때 -> 이전 사진 (-1)
    if (offset.x > swipeThreshold || velocity.x > 500) {
      navigate(-1);
    } 
    // 왼쪽으로 빠르게 드래그하거나, 많이 드래그했을 때 -> 다음 사진 (1)
    else if (offset.x < -swipeThreshold || velocity.x < -500) {
      navigate(1);
    }
  };

  // 슬라이드 애니메이션 설정
  // 변경 후 (: Variants 추가)
const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 }
  })
};
  return (
    <section className="snap-section">
      {/* --- 썸네일 그리드 영역 --- */}
      <div className="w-full max-w-md px-6 mx-auto">
        <div className="mb-6 text-center">
          <p className="text-accent text-xs font-bold tracking-widest mb-1">GALLERY</p>
          <h2 className="text-xl font-bold text-starlight">우리의 아름다운 순간</h2>
        </div>
        {/* 4열 그리드 */}
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              onClick={() => { setDirection(0); setSelectedIndex(i); }} // 클릭 시 해당 인덱스로 설정
              className="relative aspect-[3/4] cursor-pointer rounded-md overflow-hidden border border-white/10 shadow-md group"
            >
              <Image src={src} alt="thumbnail" fill className="object-cover transition-transform group-hover:scale-110" sizes="25vw" />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[10px] text-cream/40 mt-4">터치하여 크게 보기</p>
      </div>

      {/* --- 확대된 라이트박스 영역 --- */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            // 배경 클릭 시 닫기
            onClick={() => setSelectedIndex(null)}
            // [요구사항 반영] bg-black/90으로 어둡게 하고, backdrop-blur-md로 배경 흐리게 처리
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            {/* 닫기 및 네비게이션 버튼 (이벤트 전파 막기 e.stopPropagation 필수) */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50"><X size={32} /></button>
            
            {/* 왼쪽 화살표 버튼 (PC용) */}
            <button 
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-2 text-white/30 hover:text-white p-4 z-50 hidden sm:block" // 모바일에선 숨김 (스와이프 유도)
            >
                <ChevronLeft size={40} />
            </button>
             {/* 오른쪽 화살표 버튼 (PC용) */}
            <button 
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-2 text-white/30 hover:text-white p-4 z-50 hidden sm:block"
            >
                <ChevronRight size={40} />
            </button>

            {/* --- 스와이프 가능한 이미지 컨테이너 --- */}
            <div className="relative w-full h-full max-w-3xl max-h-[85vh] flex items-center justify-center overflow-hidden">
                <motion.div
                  key={selectedIndex} // *중요* 인덱스가 바뀌면 새로운 요소로 인식해 애니메이션 실행
                  custom={direction} // 애니메이션 방향 전달
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  // [핵심 기능] 가로 드래그 활성화
                  drag="x"
                  // 드래그 제한 영역 (놓으면 원래 자리로 돌아옴)
                  dragConstraints={{ left: 0, right: 0 }}
                  // 드래그 탄성 (쫀쫀한 느낌)
                  dragElastic={0.8}
                  // [핵심 로직] 드래그가 끝났을 때 스와이프 판단
                  onDragEnd={handleDragEnd}
                  // 이미지 클릭 시 닫히지 않도록 이벤트 전파 막기
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full h-full flex items-center justify-center p-4 cursor-grab active:cursor-grabbing"
                >
                  <Image 
                    src={images[selectedIndex]} 
                    alt="full screen image" 
                    fill 
                    className="object-contain pointer-events-none shadow-2xl" // pointer-events-none: 이미지 자체의 드래그 방지
                    priority
                  />
                </motion.div>
            </div>
            
            {/* 하단 페이지 표시기 */}
            <div className="absolute bottom-8 text-cream/50 text-sm font-mono bg-black/50 px-3 py-1 rounded-full">
                {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Section4_Gallery;