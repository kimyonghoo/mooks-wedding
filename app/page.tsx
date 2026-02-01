// app/page.tsx
import Section1_Hero from '@/app/components/Section1_Hero';
import Section2_Quote from '@/app/components/Section2_Quote';
import Section3_Calendar from '@/app/components/Section3_Calendar';
import Section4_Gallery from '@/app/components/Section4_Gallery';
import Section5_Map from '@/app/components/Section5_Map';
import StarBackground from '@/app/components/StarBackground'; // 👈 import 추가

export default function Home() {
  return (
    <main className="snap-container">
      {/* 별 배경 컴포넌트 추가 (모든 페이지 뒤에 깔림) */}
      <StarBackground />
      
      <Section1_Hero />
      <Section2_Quote />
      <Section3_Calendar />
      <Section4_Gallery />
      <Section5_Map />
    </main>
  );
}