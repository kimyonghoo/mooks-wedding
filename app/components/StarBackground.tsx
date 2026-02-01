'use client';
import { useEffect, useState } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState<{ id: number; left: string; duration: string; delay: string; size: string }[]>([]);

  useEffect(() => {
    // 별 50개 생성
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`, // 랜덤 가로 위치
      duration: `${Math.random() * 5 + 5}s`, // 떨어지는 속도 (5~10초)
      delay: `${Math.random() * 5}s`, // 시작 딜레이
      size: `${Math.random() * 2 + 1}px`, // 크기 (1~3px)
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full opacity-0"
          style={{
            left: star.left,
            top: '-10px',
            width: star.size,
            height: star.size,
            animation: `fall ${star.duration} linear infinite`,
            animationDelay: star.delay,
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)', // 빛나는 효과
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;