import Link from "next/link";
import { contactEmail } from "@/data/config";
import { strengths } from "@/data/strengths";
import CTASection from "@/components/CTASection";

const keywords = [
  "経営戦略", "業務改善", "商品MD", "商品開発", "店舗運営",
  "営業活性化", "人材開発", "企業価値向上", "異業種協業", "社外取締役", "顧問",
];

export default function HomePage() {
  const subject = encodeURIComponent("ADEPTLINKへのお問い合わせ");
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F0F9FF 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 80% 30%, #DBEAFE 0%, transparent 60%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-6">
              Business Growth Partner
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              企業価値の最大化を、<br />
              実務経験と<br className="sm:hidden" />経営視点で支える。
            </h1>
            <p className="text-text-sub text-base md:text-lg leading-relaxed mb-4">
              流通小売業界で40年以上にわたり培った実践知をもとに、
              経営・業務・人事・事業開発の課題解決を支援します。
            </p>
            <p className="text-text-sub text-sm leading-relaxed mb-10">
              ADEPTLINKは、店舗運営、商品戦略、業態開発、ドラッグ事業政策、経営管理に携わってきた経験を活かし、
              企業の持続的な成長と価値向上を支援するコンサルティング事業です。
              流通小売業を中心に培った知見を、商社、メーカー、建築・施工、システム開発、人材開発など、幅広い業界との協業に活かしています。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-accent-blue text-white font-medium px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                サービスを見る
              </Link>
              <a
                href={`mailto:${contactEmail}?subject=${subject}`}
                className="bg-white text-navy font-medium px-8 py-3.5 rounded-full border border-gray-200 hover:border-accent-blue hover:text-accent-blue transition-colors duration-200"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { value: "40+", unit: "Years", label: "流通小売業界での経験" },
              { value: "Multi", unit: "Format", label: "GMS・SSM・DGSでの実務経験" },
              { value: "Executive", unit: "", label: "代表取締役社長・社外取締役を歴任" },
            ].map(({ value, unit, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-inter text-3xl font-bold text-navy">{value}</span>
                  {unit && (
                    <span className="font-inter text-lg font-semibold text-accent-blue ml-1">
                      {unit}
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-sub">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
              About ADEPTLINK
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
              現場を知り、経営を動かす。<br />
              企業成長のための実践型コンサルティング。
            </h2>
          </div>
          <div>
            <p className="text-text-sub leading-relaxed mb-4">
              企業の成長には、戦略を描くだけでなく、それを現場で実行し、継続的に改善していく力が欠かせません。
            </p>
            <p className="text-text-sub leading-relaxed mb-4">
              ADEPTLINKは、現場運営から商品戦略、業態開発、営業統括、経営管理までを経験してきた実践知をもとに、企業ごとの課題に応じた支援を行います。
            </p>
            <p className="text-text-sub leading-relaxed mb-8">
              計画策定にとどまらず、具現化に向けた進捗管理と推進を重視し、企業価値向上に向けた取り組みに伴走します。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent-blue font-medium hover:gap-3 transition-all duration-200"
            >
              ADEPTLINKについて詳しく
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="py-12 px-6 bg-bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {keywords.map((kw) => (
              <span
                key={kw}
                className="bg-white text-text-sub text-sm px-4 py-1.5 rounded-full border border-gray-200"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3">
              Our Strengths
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              ADEPTLINKの強み
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((s, i) => (
              <div
                key={s.title}
                className="bg-bg-light rounded-2xl p-8 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-inter text-4xl font-bold text-accent-blue/20">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                </div>
                <p className="text-text-sub text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="bg-navy-dark py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-gold mb-4">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            経験を、企業の次の成長へ。
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            ADEPTLINKは、流通小売業界で培った現場力と経営視点をもとに、
            企業の課題解決と価値向上を支援します。
          </p>
        </div>
      </section>

      {/* Representative Message */}
      <section className="py-20 px-6 bg-bg-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
                Message
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-snug">
                代表メッセージ
              </h2>
              <div className="w-16 h-0.5 bg-accent-gold mb-8" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/image/ceo.jpeg"
                  alt="代表 國光 良昭"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent px-6 py-5">
                  <p className="text-white font-bold text-lg leading-tight">國光 良昭</p>
                  <p className="text-white/70 text-sm">ADEPTLINK 代表</p>
                </div>
              </div>
            </div>
            <div className="lg:pt-32">
              <p className="text-text-sub leading-relaxed mb-4">
                流通小売業界で40年以上にわたり、店舗運営・商品戦略・業態開発・ドラッグ事業政策・経営管理など、幅広い領域に携わってまいりました。現場の最前線から経営の意思決定まで、数多くの局面でチームを牽引してきた経験は、どんな課題にも「現場視点」と「経営視点」の両軸で向き合う姿勢を育んでくれました。
              </p>
              <p className="text-text-sub leading-relaxed mb-4">
                その実践的な知見を携え、現在は「商社」「メーカー」「建築・施工」「システム開発」「人材開発」など、多様な業界の企業様との協業を通じて、企業価値の最大化を支援しております。業界の垣根を超えた視野と、長年の現場経験から生まれる具体的な提案が、新たな成長の起点になると信じています。
              </p>
              <p className="text-text-sub leading-relaxed mb-8">
                「誠実に、真摯に、そして大胆に。」これが私の変わらぬ信条です。顧客満足の追求と社会への貢献度向上を軸に、これからも企業の成長と課題解決に全力で取り組んでまいります。お気軽にご相談ください。共に次の一手を考えましょう。
              </p>
              <p className="text-right border-t border-gray-200 pt-6">
                <span className="text-sm text-text-sub">ADEPTLINK 代表</span><br />
                <span className="text-xl font-bold text-navy">國光 良昭</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
