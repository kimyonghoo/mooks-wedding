'use client';
import { motion } from 'framer-motion';

const Section2_Quote = () => {
  return (
    // bg-cosmic-800 제거 -> 투명 배경
    <section className="snap-section flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // 디자인 업그레이드:
        // 1. bg-cosmic-900/50 -> 검은색 반투명 (bg-black/30)
        // 2. backdrop-blur-md -> 유리처럼 뿌옇게
        // 3. 테두리 색상 변경 (border-starlight/20)
        className="max-w-xs text-center px-8 py-12 border border-starlight/30 rounded-2xl bg-black/30 backdrop-blur-md shadow-2xl"
      >
        <h2 className="text-starlight text-xl font-bold mb-8">소중한 분들을 초대합니다</h2>
        {/* text-gray-200 -> text-cream (더 부드러운 색) */}
        <div className="space-y-6 text-cream text-base leading-8 font-normal">
          <p>
            서로 다른 별에서 태어나<br />
            긴 여행 끝에 서로를 만났습니다.
          </p>
          <p>
            이제 같은 별을 바라보며<br />
            함께 걸어가려 합니다.
          </p>
          <p>
            저희 두 사람의 시작을<br />
            따뜻한 마음으로 축복해주세요.
          </p>
        </div>
        
        <div className="mt-12 pt-10 border-t border-starlight/20 space-y-3">
            <div className="flex justify-center items-center gap-3">
                <span className="text-cream/70 text-sm">000 · 000 의 장남</span>
                <strong className="text-xl text-starlight">박형묵</strong>
            </div>
            <div className="flex justify-center items-center gap-3">
                <span className="text-cream/70 text-sm">000 · 000 의 차녀</span>
                <strong className="text-xl text-starlight">문원영</strong>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Section2_Quote;