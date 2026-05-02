import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#111826] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,200,0,0.18),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(255,200,0,0.25),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:4px_4px]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl grid-cols-1 gap-10 px-5 pb-10 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12 lg:px-8 lg:pt-16">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}
