import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#151922] pb-16 pt-16">
      <div className="hero-dot absolute inset-0 opacity-35" aria-hidden />
      <div
        className="absolute -right-24 top-28 h-[650px] w-[650px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,204,0,0.26) 0%, rgba(255,204,0,0.08) 42%, rgba(21,25,34,0) 76%)' }}
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.04fr_0.96fr]">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}
