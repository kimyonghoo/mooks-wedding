'use client';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

const Section3_Calendar = () => {
  // 현재가 2026년 2월이므로, 결혼식 날짜를 2026년 4월 18일로 설정해야 카운트다운이 됨
  const weddingDate = new Date('2026-04-18T12:00:00');

  // 카운트다운 렌더러 (숫자판 디자인)
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-xl text-accent font-bold">결혼식을 축하합니다!</span>;
    }
    
    // 시간 단위별 박스 디자인 (1초마다 숫자 바뀜)
    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
      <div className="flex flex-col items-center mx-1 sm:mx-2">
        <div className="bg-black/40 backdrop-blur-sm w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center border border-starlight/30 shadow-[0_0_15px_rgba(255,215,0,0.1)]">
          {/* font-mono: 숫자가 흔들리지 않게 고정폭 폰트 사용 */}
          <span className="text-xl sm:text-2xl font-mono font-bold text-starlight tabular-nums">
            {value < 10 ? `0${value}` : value}
          </span>
        </div>
        <span className="text-[10px] text-cream/60 mt-2 uppercase tracking-widest">{label}</span>
      </div>
    );

    return (
      <div className="flex flex-col items-center animate-in fade-in duration-700">
        <div className="text-starlight font-bold text-lg mb-4 tracking-widest">
           D - <span className="text-3xl text-accent">{days}</span>
        </div>
        <div className="flex items-start justify-center">
            {/* Days는 위에서 강조했으므로 시/분/초 만 보여주거나, 다 보여줘도 됨. 여기선 다 보여줌 */}
            <TimeUnit value={hours} label="Hours" />
            <span className="text-starlight text-xl sm:text-2xl mt-3 mx-1">:</span>
            <TimeUnit value={minutes} label="Mins" />
            <span className="text-starlight text-xl sm:text-2xl mt-3 mx-1">:</span>
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
        <h2 className="text-2xl font-bold mb-2 text-starlight text-center">4월의 어느 멋진 날</h2>
        {/* 날짜 수정됨: 2026년 */}
        <p className="mb-10 text-center text-cream/80 text-lg">2026. 04. 18. SAT 12:00 PM</p>

        {/* 2026년 4월 달력 (4/1은 수요일) */}
        <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-starlight/20 mb-10 shadow-xl">
          <div className="grid grid-cols-7 gap-4 text-center text-sm text-cream/70 mb-6 font-bold">
            <div className="text-accent">SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
          </div>
          <div className="grid grid-cols-7 gap-4 text-center text-base text-cream/90">
            {/* 1주차: 1일이 수요일 */}
            <div></div><div></div><div></div><div>1</div><div>2</div><div>3</div><div>4</div>
            
            {/* 2주차 */}
            <div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div>
            
            {/* 3주차: 18일이 토요일 */}
            <div>12</div><div>13</div><div>14</div><div>15</div><div>16</div><div>17</div>
            <div className="relative flex items-center justify-center">
                {/* 18일 강조 효과 */}
                <div className="absolute w-9 h-9 bg-starlight/50 rounded-full animate-ping opacity-75"></div>
                <span className="relative z-10 text-cosmic-900 font-bold bg-starlight w-8 h-8 rounded-full flex items-center justify-center shadow-lg shadow-starlight/30">18</span>
            </div>
            
            {/* 4주차 */}
            <div>19</div><div>20</div><div>21</div><div>22</div><div>23</div><div>24</div><div>25</div>
            
            {/* 5주차 */}
            <div>26</div><div>27</div><div>28</div><div>29</div><div>30</div><div></div><div></div>
          </div>
        </div>

        {/* 카운트다운 컴포넌트 */}
        <div className="py-4 px-6 bg-black/30 backdrop-blur-md rounded-xl border border-starlight/10 flex justify-center">
           <Countdown date={weddingDate} renderer={renderer} />
        </div>
      </motion.div>
    </section>
  );
};
export default Section3_Calendar;