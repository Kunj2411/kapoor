export default function QuoteSection() {
  return (
    <section className="px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-outline-soft pt-28 sm:pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-cta text-5xl font-black leading-none mb-6 opacity-30 select-none">&ldquo;</div>
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-dark leading-relaxed tracking-tight italic mb-8">
          Our nation moves forward on the roads we build and the care we give them.
          Every road carries dreams, responsibilities, and the future of generations to come.
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-cta" />
          <cite className="not-italic text-sm font-black uppercase tracking-widest text-primary/60">
            Shri Atal Bihari Vajpayee
          </cite>
          <div className="h-px w-12 bg-cta" />
        </div>
      </div>
    </section>
  );
}
