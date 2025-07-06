/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // メインカラー
        primary: {
          DEFAULT: '#4F46E5', // インディゴ
          light: '#818CF8',   // 明るいインディゴ
          dark: '#3730A3',    // 暗いインディゴ
        },
        // アクセントカラー
        accent: {
          warm: '#F59E0B',    // アンバー
          cool: '#10B981',    // エメラルド
          light: '#F3F4F6',   // グレー
          blue: '#EFF6FF',    // ブルーグレー
        },
        // テキストカラー
        text: {
          DEFAULT: '#1F2937', // ダークグレー
          light: '#4B5563',   // ミディアムグレー
          lighter: '#6B7280', // ライトグレー
        },
        // リンクカラー
        link: {
          DEFAULT: '#2563EB', // ブルー
          hover: '#1D4ED8',   // ダークブルー
        },
        // 背景カラー
        bg: {
          warm: '#FFF7ED',    // ウォームホワイト
          cool: '#F0FDFA',    // クールホワイト
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 