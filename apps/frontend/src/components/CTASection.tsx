import { contactEmail } from "@/data/config";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export default function CTASection({
  title = "企業価値向上に向けたご相談を承ります。",
  description = "経営課題、業務改善、人材開発、社外取締役・顧問のご相談など、企業の状況に応じて柔軟に対応いたします。",
  buttonLabel = "お問い合わせ",
}: CTASectionProps) {
  const subject = encodeURIComponent("ADEPTLINKへのお問い合わせ");
  return (
    <section className="bg-navy-dark py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-gold mb-4">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
          {title}
        </h2>
        <p className="text-gray-300 text-base leading-relaxed mb-10">
          {description}
        </p>
        <a
          href={`mailto:${contactEmail}?subject=${subject}`}
          className="inline-block bg-accent-blue text-white font-medium px-10 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 text-base"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
