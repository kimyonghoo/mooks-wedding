'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient'; // 방금 만든 파일 import
import { Copy, MessageCircle, Loader2 } from 'lucide-react';

// DB 데이터 타입 정의
type GuestMessage = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

const Section6_Gift = () => {
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [guestbook, setGuestbook] = useState<GuestMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // [1] 처음 켜졌을 때 DB에서 방명록 가져오기
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false }); // 최신순 정렬

    if (error) console.error('Error fetching:', error);
    else setGuestbook(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // [2] 방명록 저장하기
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert('이름과 메시지를 모두 입력해주세요!');
      return;
    }

    // DB에 쏘기
    const { error } = await supabase
      .from('guestbook')
      .insert([{ name, message }]);

    if (error) {
      alert('저장에 실패했습니다 ㅠㅠ');
      console.error(error);
    } else {
      // 성공하면 입력창 비우고 목록 다시 불러오기
      setName('');
      setMessage('');
      fetchMessages(); 
    }
  };

  const copy = (num: string) => {
    navigator.clipboard.writeText(num);
    alert('계좌번호가 복사되었습니다.');
  };

  return (
    <section className="snap-section">
      <div className="w-full max-w-md px-6 mx-auto h-full flex flex-col justify-center py-10">
        
        {/* 상단 계좌번호 영역 */}
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-starlight text-center">마음 전하는 곳</h2>
            <div className="bg-cosmic-800/80 backdrop-blur-md rounded-2xl p-5 border border-starlight/20 shadow-lg">
                <div className="flex mb-4 border-b border-white/10">
                    <button onClick={() => setActiveTab('groom')} className={`flex-1 pb-2 text-sm transition-colors ${activeTab === 'groom' ? 'text-starlight border-b-2 border-starlight font-bold' : 'text-white/40'}`}>신랑측</button>
                    <button onClick={() => setActiveTab('bride')} className={`flex-1 pb-2 text-sm transition-colors ${activeTab === 'bride' ? 'text-accent border-b-2 border-accent font-bold' : 'text-white/40'}`}>신부측</button>
                </div>
                <div className="space-y-4">
                    {activeTab === 'groom' ? (
                        <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                            <div><span className="text-sm text-cream font-bold">신랑 박형묵</span><p className="text-xs text-white/60">국민 123-456-7890</p></div>
                            <button onClick={() => copy('1234567890')} className="text-xs border border-starlight/50 px-3 py-1 rounded-full text-starlight hover:bg-starlight hover:text-cosmic-900 transition-colors"><Copy size={12} /> 복사</button>
                        </div>
                    ) : (
                        <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                            <div><span className="text-sm text-cream font-bold">신부 문원영</span><p className="text-xs text-white/60">우리 1002-123-4444</p></div>
                            <button onClick={() => copy('10021234444')} className="text-xs border border-accent/50 px-3 py-1 rounded-full text-accent hover:bg-accent hover:text-white transition-colors"><Copy size={12} /> 복사</button>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* 하단 DB 연동 방명록 */}
        <div className="flex-1 flex flex-col min-h-0">
            <div className="flex items-center justify-center gap-2 mb-3">
                <MessageCircle size={16} className="text-accent" />
                <h3 className="text-sm font-bold text-starlight">축하 메시지 ({guestbook.length})</h3>
            </div>

            {/* 입력 폼 */}
            <form onSubmit={handleSubmit} className="bg-white/5 p-3 rounded-xl mb-3 border border-white/10 flex flex-col gap-2 shrink-0">
                <div className="flex gap-2">
                    <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}
                        className="w-[30%] bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-starlight/50" />
                    <input type="text" placeholder="축하 메시지를 남겨주세요" value={message} onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-starlight/50" />
                </div>
                <button type="submit" className="w-full bg-starlight/90 text-cosmic-900 text-xs font-bold py-2 rounded-lg hover:bg-white transition-colors">
                    등록하기
                </button>
            </form>

            {/* 메시지 리스트 (스크롤 영역) */}
            <div className="flex-1 overflow-y-auto scrollbar-hide space-y-2 pr-1 pb-4">
                {isLoading ? (
                    <div className="flex justify-center py-4"><Loader2 className="animate-spin text-white/30" /></div>
                ) : guestbook.length === 0 ? (
                    <p className="text-center text-xs text-white/30 py-4">아직 메시지가 없어요. 첫 번째 주인공이 되어주세요!</p>
                ) : (
                    guestbook.map((msg) => (
                        <div key={msg.id} className="bg-white/10 rounded-lg p-3 text-xs border border-white/5 animate-in slide-in-from-bottom-2">
                            <div className="flex justify-between items-end mb-1">
                                <span className="font-bold text-starlight">{msg.name}</span>
                                <span className="text-[10px] text-white/30">
                                  {new Date(msg.created_at).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-cream/90 break-words leading-relaxed">{msg.message}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
      </div>
    </section>
  );
};
export default Section6_Gift;