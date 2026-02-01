// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 폰트 적용을 위한 설정 추가
        sans: ["var(--font-gowun)", "sans-serif"],
      },
      colors: {
        cosmic: {
          // 배경은 유지하되 살짝 더 깊이감 있게
          900: "#0A0820",
          800: "#151235",
          700: "#2A2650",
        },
        // 촌스러운 노랑 -> 은은한 샴페인 골드
        starlight: "#F4E0B8", 
        // 촌스러운 빨강 -> 차분한 로즈 핑크
        accent: "#E68A8A",
        // 텍스트용 크림색 (완전 흰색보다 눈이 편안함)
        cream: "#F8F8F2",
      },
    },
  },
  plugins: [],
};
export default config;