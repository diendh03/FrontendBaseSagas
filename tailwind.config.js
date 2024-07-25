/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      // Font-size 10px
      10: '10px',
      '10-400-normal': [
        '10px',
        {
          fontWeight: '400',
          lineHeight: 'normal',
        },
      ],
      '10-500-normal': [
        '10px',
        {
          lineHeight: 'normal',
          fontWeight: '500',
        },
      ],
      // Font-size 12px
      12: '12px',
      '12-400-normal': [
        '12px',
        {
          lineHeight: 'normal',
          fontWeight: '400',
        },
      ],
      '12-500-normal': [
        '12px',
        {
          lineHeight: 'normal',
          fontWeight: '500',
        },
      ],
      '12-600-normal': [
        '12px',
        {
          lineHeight: 'normal',
          fontWeight: '600',
        },
      ],
      // Font-size 14px
      14: '14px',
      '14-400-normal': [
        '14px',
        {
          lineHeight: 'normal',
          fontWeight: '400',
        },
      ],
      '14-500-normal': [
        '14px',
        {
          lineHeight: 'normal',
          fontWeight: '500',
        },
      ],
      '14-700-normal': [
        '14px',
        {
          lineHeight: 'normal',
          fontWeight: '700',
        },
      ],
      '14-500-16.94': [
        '14px',
        {
          lineHeight: '16.94px',
          fontWeight: '500',
        },
      ],
      // Font-size: 15px
      15: '15px',
      '15-400-normal': [
        '15px',
        {
          lineHeight: 'normal',
          fontWeight: '400',
        },
      ],
      // Font-size: 16px
      16: '16px',
      '16-600-normal': [
        '16px',
        {
          lineHeight: 'normal',
          fontWeight: '600',
        },
      ],
      // Font-size: 17px
      17: '17px',
      '17-600-normal': [
        '17px',
        {
          lineHeight: 'normal',
          fontWeight: '600',
        },
      ],
      // Font-size: 18px
      18: '18px',
      '18-400-normal': [
        '18px',
        {
          lineHeight: 'normal',
          fontWeight: '400',
        },
      ],
      '18-600-27': [
        '18px',
        {
          lineHeight: '27px',
          fontWeight: '600',
        },
      ],
      // Font-size: 20px
      20: '20px',
      '20-700-normal': [
        '20px',
        {
          lineHeight: 'normal',
          fontWeight: '700',
        },
      ],
      '20-600-30': [
        '20px',
        {
          lineHeight: '30px',
          fontWeight: '700',
        },
      ],
      '20-600-24': [
        '20px',
        {
          lineHeight: '24.2px',
          fontWeight: '700',
        },
      ],
      // Font-size: 24px
      24: '24px',
      '24-700-36': [
        '24px',
        {
          lineHeight: '36px',
          fontWeight: '700',
        },
      ],
      // Font-size: 40px
      40: '40px',
      '40-700-normal': [
        '40px',
        {
          lineHeight: 'normal',
          fontWeight: '700',
        },
      ],
    },
    extend: {
      colors: {
        'primary-green': {
          400: '#4ACBB0',
          500: '#07AE9A',
          600: '#27A745',
          700: '#34C759',
          800: '#02771E',
        },
        'primary-orange': {
          400: '#F2994A',
        },
        'primary-gray': {
          50: '#F7F8F9',
          200: '#E8ECF4',
          300: '#D4DFE3',
          400: '#AEAEB2',
          500: '#828282',
          600: '#656B7D',
          700: '#3B3C40',
          900: '#1A191B',
        },
        'primary-red': {
          500: '#FF4D4F',
          600: '#EF0D0D',
        },
        'primary-blue': {
          300: '#69CCEC',
          500: '#1C9AE2',
          600: '#007BFF',
        },
        'primary-purple': {
          500: '#9B51E0',
        },
        'primary-slate': {
          200: '#E8ECF4',
        },
        'primary-rose': {
          500: '#EB5757',
        },
        'light-white': {
          500: '#F7F5F9',
        },
        'primary-rose': {
          500: '#EB5757',
        },
        'primary-zinc': {
          300: '#D9D9D9',
          500: '#888888',
          900: '#1A051D',
        },
        'primary-neutral': {
          100: '#F5F5F5',
          300: '#D5D5D5',
          400: '#9C9C9F',
        },
        'primary-violet': {
          400: '#A490F4',
        },
        'nature-black': '#010101',
        'primary-teal': {
          800: '#00655C',
        },
        'primary-indigo': {
          500: '#6D5AE5',
        },
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      sfProDisplay: ['SF Pro Display', 'sans-serif'],
      plusJakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
      lexend: ['Lexend', 'sans-serif'],
      aboutLove: ['About Love', 'sans-serif'],
    },
  },
  plugins: [],
};
