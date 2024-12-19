/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            maxWidth: {
                DEFAULT: '1340px', // 올바른 속성명으로 수정
            },
            padding: {
                DEFAULT: '1rem', // 기본 padding
                sm: '2rem', // 작은 화면에서 padding 크기 설정
                md: '4rem', // 중간 화면에서 padding 크기 설정
                lg: '6rem', // 큰 화면에서 padding 크기 설정
                xl: '8rem', // 더 큰 화면에서 padding 크기 설정
            },
        },
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [],
};
