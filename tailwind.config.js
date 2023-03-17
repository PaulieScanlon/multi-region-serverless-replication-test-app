/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  safelist: ['border-blue-600', 'text-blue-600', 'bg-green-500', 'bg-gray-200'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            form: {
              border: `1px solid ${theme('colors.gray.200')}`,
              borderRadius: '0.375rem',
              padding: theme('spacing[2.5]'),
            },
            label: {
              fontSize: '0.8rem',
              fontWeight: 'bold',
            },
            select: {
              display: 'block',
              textTransform: 'capitalize',
              border: `1px solid ${theme('colors.gray.100')}`,
              borderRadius: '0.25rem',
              padding: theme('spacing[1.5]'),
              paddingRight: theme('spacing[2]'),
            },
            input: {
              display: 'block',
              border: `1px solid ${theme('colors.gray.100')}`,
              borderRadius: '0.25rem',
              padding: theme('spacing[1.5]'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
