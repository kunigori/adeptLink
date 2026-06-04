import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { contactEmail } from "@/data/config";

export const metadata: Metadata = {
  title: "サービス内容｜経営・業務・人事コンサルティング",
  description:
    "ADEPTLINKのサービス内容。経営コンサルティング、業務コンサルティング、人事コンサルティング、事業開発・協業支援の4領域で企業の成長を支援します。",
};

export default function ServicesPage() {
  const subject = encodeURIComponent("ADEPTLINKへのお問い合わせ");
  return (
    <>
      <PageHero
        label="Services"
        title={"企業の成長課題に、\n実践的な解決策を。"}
        description="ADEPTLINKでは、経営・業務・人事・事業開発の各領域において、企業ごとの課題に応じた支援を行います。"
      />

      {/* Services List */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {services.map((svc, i) => (
            <div
              key={svc.number}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start p-8 rounded-2xl border border-gray-100 bg-bg-light hover:shadow-md transition-shadow duration-300"
            >
              <div className="lg:col-span-1">
                <span className="font-inter text-6xl font-bold text-accent-blue/15 leading-none">
                  {svc.number}
                </span>
                <h2 className="text-xl font-bold text-navy mt-2 mb-3">{svc.title}</h2>
                <div className="w-8 h-0.5 bg-accent-gold" />
              </div>
              <div className="lg:col-span-2">
                <p className="text-text-sub leading-relaxed mb-6">{svc.description}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3 font-inter">
                    支援内容例
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-sub">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark section */}
      <section className="bg-navy-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-gold mb-4">
            Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
            経験を、企業の次の成長へ。
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-10">
            ADEPTLINKは、流通小売業界で培った現場力と経営視点をもとに、企業の課題解決と価値向上を支援します。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${contactEmail}?subject=${subject}`}
              className="bg-accent-blue text-white font-medium px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              お問い合わせ
            </a>
            <Link
              href="/career"
              className="bg-white/10 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors duration-200"
            >
              経歴を見る
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
