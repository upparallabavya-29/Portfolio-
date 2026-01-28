/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rich-black': '#0A0A0A',
                'off-black': '#171717',
                'subtle-gray': '#262626',
                'primary': '#F8FAFC', // Slate 50
                'secondary': '#94A3B8', // Slate 400
                'accent': '#38BDF8', // Sky 400
                'muted': '#475569',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '112': '28rem',
                '128': '32rem',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
