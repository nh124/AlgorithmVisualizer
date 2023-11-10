/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        zoominAnimation: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomoutAnimation: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(0)' },
        },
        traver: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        slideAnimation: {
          '0%': { transform: 'translateX(-15px)' },
          '50%': { transform: 'translateX(5px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        nodeSlide: {
          '0%': { transform: 'translateX(-15px)' },
          '50%': { transform: 'translateX(30px)' },
          '100%': { transform: 'translateX(25px)' },
        },
        nodeSlideUp: {
          '0%': { transform: 'translateY(-1px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        nodeSlideDown: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'translateY(40px) rotate(45deg)' },
        },
        fade: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        flash: {
          '0%': { backgroundColor: 'white' },
          '50%': { backgroundColor: 'black' },
          '100%': { backgroundColor: 'white' },
        },
      },
      animation: {
        zoominAnimation: 'zoominAnimation 1s ease-in-out ',
        zoomoutAnimation: 'zoomoutAnimation 1s ease-in-out ',
        slideAnimation: 'slideAnimation 0.5s ease-in-out ',
        traverAnimate: 'traver 1s ease-in-out ',
        fadeAnimation: 'fade 1s ease-in-out ',
        flashAnimation: 'flash 1s ease-in-out ',
        nodeSlideAnimation: 'nodeSlide 1s ease-in-out infinite',
        nodeSlideUpAnimation: 'nodeSlideUp 1s ease-in-out infinite',
        nodeSlideDownAnimation: 'nodeSlideDown 1s ease-in-out infinite',
      },
      extend: {
        transitionProperty: {
          height: 'height',
        },
      },
    },
  },
  plugins: [],
};
