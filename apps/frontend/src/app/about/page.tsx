import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "ADEPTLINKについて｜代表プロフィール・事業概要",
  description:
    "ADEPTLINKの事業概要と代表・國光良昭のプロフィールをご紹介します。流通小売業界40年以上の実務経験を持つ経営コンサルタントです。",
};

const companyInfo = [
  { label: "屋号", value: "ADEPTLINK（アデプトリンク）" },
  { label: "代表", value: profile.name },
  { label: "所在地", value: profile.location },
  {
    label: "所在地補足",
    value: profile.locationNote,
    note: true,
  },
  { label: "事業内容", value: profile.services },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="ADEPTLINKについて"
        description="ADEPTLINKは、流通小売業界で培った実務経験と経営視点をもとに、企業価値の最大化を支援するコンサルティング事業です。"
      />

      {/* 事業概要 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
            Company Overview
          </p>
          <h2 className="text-3xl font-bold text-navy mb-10">事業概要</h2>

          {/* Desktop table / Mobile cards */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <tbody>
                {companyInfo.map(({ label, value, note }) => (
                  <tr key={label} className="border-b border-gray-100 last:border-none">
                    <td className="py-4 px-6 font-medium text-text-sub bg-bg-light w-40 align-top">
                      {label}
                    </td>
                    <td className={`py-4 px-6 text-navy ${note ? "text-text-sub text-xs" : ""}`}>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden flex flex-col gap-4">
            {companyInfo.map(({ label, value, note }) => (
              <div key={label} className="bg-bg-light rounded-xl p-4 border border-gray-100">
                <p className="text-xs font-medium text-text-sub mb-1">{label}</p>
                <p className={`text-navy ${note ? "text-xs text-text-sub" : "font-medium"}`}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 代表プロフィール */}
      <section className="py-20 px-6 bg-bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
                Representative
              </p>
              <h2 className="text-3xl font-bold text-navy mb-4">代表プロフィール</h2>
              <div className="w-12 h-0.5 bg-accent-gold mb-6" />
              <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/image/ceo.jpeg"
                    alt="代表 Y.K"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-text-sub mb-1">ADEPTLINK 代表</p>
                <p className="text-xl font-bold text-navy mb-1">{profile.name}</p>
                <p className="font-inter text-xs text-text-sub">{profile.nameEn}</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <p className="text-text-sub leading-relaxed mb-4">
                  國光 良昭は、昭和54年にジャスコ株式会社、現在のイオン株式会社に入社後、店舗運営、商品本部、マックスバリュ開発プロジェクト、ドラッグ事業政策など、多様な業務に従事してまいりました。
                </p>
                <p className="text-text-sub leading-relaxed mb-4">
                  株式会社ドラッグイレブンでは、取締役商品部長、常務取締役事業本部長を歴任し、商品責任者、営業統括責任者、業態開発責任者として事業成長に携わりました。
                </p>
                <p className="text-text-sub leading-relaxed mb-4">
                  株式会社ウェルパークでは、顧問を経て代表取締役社長に就任。経営管理全般、企業価値向上戦略の立案と推進に取り組みました。
                </p>
                <p className="text-text-sub leading-relaxed">
                  現在はADEPTLINK代表として、企業の成長支援、業務改善、人材活性化、企業価値向上に向けたコンサルティングを行っています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
