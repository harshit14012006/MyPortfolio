module.exports = {
    theme: {
      extend: {
        keyframes: {
          flip: {
            '0%, 100%': { transform: 'rotateX(0)' },
            '50%': { transform: 'rotateX(180deg)' },
          },
        },
        animation: {
          flip: 'flip 1.5s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  };
  