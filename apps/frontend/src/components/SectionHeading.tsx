interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      <p
        className={`font-inter text-xs font-semibold uppercase tracking-widest mb-3 ${
          light ? "text-accent-gold" : "text-accent-blue"
        }`}
      >
        {label}
      </p>
      <h2
        className={`text-3xl md:text-4xl font-bold leading-snug mb-4 ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-text-sub"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
