'use client';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';

const Section3_Calendar = () => {
  // [수정 1] 날짜 뒤에 +09:00을 붙여서 "한국 시간"임을 명시 (서버/클라이언트 시간차 해결)
  const weddingDate = new Date('2026-04-18T12:00:00+09:00');

  // [수정 2] Hydration 에러 방지용 상태 관리
  // 화면이 브라우저에 마운트된 후에만 카운트다운을 보여줍니다.
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) return <span className="text-xl text-accent font-bold">결혼식을 축하합니다!</span>;
    
    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
      <div className="flex flex-col items-center mx-1">
        <div className="bg-cosmic-800/80 backdrop-blur-sm w-12 h-12 rounded-lg flex items-center justify-center border border-starlight/20 shadow-lg">
          <span className="text-xl font-mono font-bold text-starlight tabular-nums">
            {value < 10 ? `0${value}` : value}
          </span>
        </div>
        <span className="text-[10px] text-cream/60 mt-2 uppercase">{label}</span>
      </div>
    );

    return (
      <div className="flex flex-col items-center">
        <div className="text-starlight font-bold text-lg mb-4 tracking-widest">
           D - <span className="text-3xl text-accent">{days}</span>
        </div>
        <div className="flex justify-center gap-1">
            <TimeUnit value={hours} label="Hours" />
            <span className="text-starlight text-xl mt-3">:</span>
            <TimeUnit value={minutes} label="Mins" />
            <span className="text-starlight text-xl mt-3">:</span>
            <TimeUnit value={seconds} label="Secs" />
        </div>
      </div>
    );
  };

  return (
    <section className="snap-section flex flex-col items-center justify-center relative">
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         className="w-full max-w-sm px-6 z-10"
      >
        <h2 className="text-xl font-bold mb-2 text-starlight text-center">4월의 어느 멋진 날</h2>
        <p className="mb-8 text-center text-cream/80 text-base">2026. 04. 18. SAT 12:00 PM</p>

        <div className="bg-cosmic-900/60 backdrop-blur-md p-6 rounded-2xl border border-starlight/20 mb-8 shadow-xl">
          <div className="grid grid-cols-7 gap-3 text-center text-xs text-cream/70 mb-4 font-bold">
            <div className="text-accent">SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
          </div>
          <div className="grid grid-cols-7 gap-3 text-center text-sm text-cream/90">
            <div></div><div></div><div></div><div>1</div><div>2</div><div>3</div><div>4</div>
            <div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div>
            <div>12</div><div>13</div><div>14</div><div>15</div><div>16</div><div>17</div>
            <div className="relative flex items-center justify-center">
                <div className="absolute w-8 h-8 bg-accent/40 rounded-full animate-ping"></div>
                <span className="relative z-10 text-cosmic-900 font-bold bg-accent w-7 h-7 rounded-full flex items-center justify-center">18</span>
            </div>
            <div>19</div><div>20</div><div>21</div><div>22</div><div>23</div><div>24</div><div>25</div>
            <div>26</div><div>27</div><div>28</div><div>29</div><div>30</div><div></div><div></div>
          </div>
        </div>

        <div className="py-4 px-4 bg-cosmic-900/60 backdrop-blur-md rounded-xl border border-starlight/10 flex justify-center min-h-[120px]">
           {/* [수정 3] isMounted가 true일 때만 카운트다운 렌더링 */}
           {isMounted ? (
             <Countdown date={weddingDate} renderer={renderer} />
           ) : (
             // 로딩 중일 때 보여줄 빈 박스 (높이 확보용)
             <div className="flex items-center justify-center text-cream/50 text-sm h-full">
               시간을 불러오는 중...
             </div>
           )}
        </div>
      </motion.div>
    </section>
  );
};
export default Section3_Calendar;