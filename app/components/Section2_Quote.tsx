'use client';
import { motion } from 'framer-motion';

const Section2_Quote = () => {
  return (
    <section className="snap-section flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // 따뜻한 보라색 유리 효과
        className="max-w-xs text-center px-8 py-12 border border-starlight/30 rounded-2xl bg-cosmic-900/60 backdrop-blur-md shadow-xl"
      >
        <h2 className="text-starlight text-lg font-bold mb-8">소중한 분들을 초대합니다</h2>
        <div className="space-y-6 text-cream text-sm leading-7 font-light">
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
        
        <div className="mt-12 pt-8 border-t border-white/10 space-y-3">
            <div className="flex justify-center items-center gap-3">
                <span className="text-cream/60 text-xs">박남용 · 곽영희 의 장남</span>
                <strong className="text-lg text-accent">박형묵</strong>
            </div>
            <div className="flex justify-center items-center gap-3">
                <span className="text-cream/60 text-xs">000 · 000 의 차녀</span>
                <strong className="text-lg text-accent">문원영</strong>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Section2_Quote;