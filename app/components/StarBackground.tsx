'use client';
import { useEffect, useState } from 'react';

const StarBackground = () => {
  const [stars, setStars] = useState<{ id: number; left: string; duration: string; delay: string; size: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 5 + 8}s`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 2 + 2}px`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-starlight/60 rounded-full blur-[1px]"
          style={{
            left: star.left,
            top: '-10px',
            width: star.size,
            height: star.size,
            animation: `fall ${star.duration} linear infinite`,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};
export default StarBackground;