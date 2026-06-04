interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-bg-light to-white">
      <div className="max-w-6xl mx-auto">
        <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
          {label}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-text-sub text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
