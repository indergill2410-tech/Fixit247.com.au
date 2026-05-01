import type { Config } from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],theme:{extend:{colors:{brand:{bg:'#1a1a0e',bgWarm:'#2d1f00',accent:'#F5C518',sand:'#C9B99A',card:'#FFFFFF',dark:'#111111',muted:'#6B7280'}},fontFamily:{display:['Sora','sans-serif'],body:['Inter','sans-serif']}}},plugins:[]} satisfies Config;
