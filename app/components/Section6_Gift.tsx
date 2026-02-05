'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Heart } from 'lucide-react';

const Section6_Gift = () => {
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

  const copy = (num: string) => {
    navigator.clipboard.writeText(num);
    alert('계좌번호가 복사되었습니다.');
  };

  return (
    <section className="snap-section">
      <div className="w-full max-w-md px-6 mx-auto">
        <h2 className="text-xl font-bold mb-8 text-starlight text-center">마음 전하는 곳</h2>
        <div className="bg-cosmic-800/80 backdrop-blur-md rounded-2xl p-6 border border-starlight/20">
          <div className="flex mb-6 border-b border-white/10">
            <button onClick={() => setActiveTab('groom')} className={`flex-1 pb-2 text-sm ${activeTab === 'groom' ? 'text-starlight border-b-2 border-starlight' : 'text-white/40'}`}>신랑측</button>
            <button onClick={() => setActiveTab('bride')} className={`flex-1 pb-2 text-sm ${activeTab === 'bride' ? 'text-accent border-b-2 border-accent' : 'text-white/40'}`}>신부측</button>
          </div>
          <div className="space-y-4">
            {activeTab === 'groom' ? (
              <div className="flex justify-between items-center bg-black/20 p-4 rounded-lg">
                <span className="text-sm">신랑 박형묵<br/><span className="text-xs text-white/60">국민 123-456-7890</span></span>
                <button onClick={() => copy('1234567890')} className="text-xs border border-starlight/50 px-2 py-1 rounded">복사</button>
              </div>
            ) : (
              <div className="flex justify-between items-center bg-black/20 p-4 rounded-lg">
                <span className="text-sm">신부 문원영<br/><span className="text-xs text-white/60">우리 1002-123-4444</span></span>
                <button onClick={() => copy('10021234444')} className="text-xs border border-accent/50 px-2 py-1 rounded text-accent">복사</button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 text-center">
            <p className="text-xs text-cream/50">저희의 시작을 축복해주셔서 감사합니다.</p>
        </div>
      </div>
    </section>
  );
};
export default Section6_Gift;