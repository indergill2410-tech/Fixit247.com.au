const steps = [
  {
    title: 'Post your urgent job',
    body: 'Tell us what is broken, where you are, and when you need help. It takes under two minutes.',
  },
  {
    title: 'Get matched with local tradies',
    body: 'We connect you with available, verified professionals in your suburb, day or night.',
  },
  {
    title: 'Choose, chat and fix fast',
    body: 'Compare responses, message directly, and pick the right tradie to get your repair sorted fast.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#151922] py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="text-center text-5xl font-extrabold text-white md:text-6xl">How it works</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-2xl text-[#ffcc00]">
          Fast emergency help in three simple steps.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/15 bg-[#1d2230] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.35)]"
            >
              <p className="text-xl font-bold text-[#ffcc00]">Step {index + 1}</p>
              <h3 className="mt-2 text-3xl font-extrabold text-white">{step.title}</h3>
              <p className="mt-4 text-xl leading-relaxed text-[#c9ced8]">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
