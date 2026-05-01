import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
export default function HeroSection(){return <section className='min-h-screen flex items-center' style={{background:'linear-gradient(135deg,#1a1a0e 0%,#1a1a0e 50%,#2d1f00 100%)'}}><div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 p-8 w-full'><HeroLeft/><HeroRight/></div></section>}
