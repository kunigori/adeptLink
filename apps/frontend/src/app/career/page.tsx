import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { careerHistory, outsideDirectorHistory, workHistory } from "@/data/career";

export const metadata: Metadata = {
  title: "略歴・職務経歴｜ADEPTLINK",
  description:
    "ADEPTLINK代表・國光良昭の略歴と職務経歴。イオン株式会社、株式会社ドラッグイレブン、株式会社ウェルパーク代表取締役社長などの経歴を掲載しています。",
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        label="Career"
        title={"40年以上の経験に基づく、\n実践的な経営支援。"}
        description="総合小売業、スーパーマーケット、ドラッグストアなど、日本国内の主要小売業態において、商品MD、商品開発、営業管理、店舗開発、経営管理まで幅広く経験してきました。"
      />

      {/* 略歴タイムライン */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
            History
          </p>
          <h2 className="text-3xl font-bold text-navy mb-12">略歴</h2>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 ml-6 hidden md:block" />
            <div className="flex flex-col gap-6">
              {careerHistory.map(({ date, event }, i) => (
                <div key={i} className="relative flex gap-6 md:gap-8 items-start">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent-blue flex-shrink-0 mt-1" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start bg-bg-light rounded-xl p-4 flex-1 border border-gray-100">
                    <time className="font-inter text-xs font-semibold text-accent-blue whitespace-nowrap bg-white px-3 py-1 rounded-full border border-accent-blue/20 flex-shrink-0">
                      {date}
                    </time>
                    <p className="text-sm text-navy leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 社外取締役歴 */}
      <section className="py-20 px-6 bg-bg-light">
        <div className="max-w-4xl mx-auto">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
            Board Positions
          </p>
          <h2 className="text-3xl font-bold text-navy mb-10">関連会社 社外取締役歴</h2>

          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="py-3 px-6 text-left font-medium font-inter text-xs uppercase tracking-widest">年月</th>
                  <th className="py-3 px-6 text-left font-medium font-inter text-xs uppercase tracking-widest">役職</th>
                </tr>
              </thead>
              <tbody>
                {outsideDirectorHistory.map(({ date, role }) => (
                  <tr key={date} className="border-b border-gray-100 last:border-none bg-white hover:bg-bg-light transition-colors">
                    <td className="py-4 px-6 font-inter text-xs text-text-sub whitespace-nowrap">{date}</td>
                    <td className="py-4 px-6 text-navy">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden flex flex-col gap-3">
            {outsideDirectorHistory.map(({ date, role }) => (
              <div key={date} className="bg-white rounded-xl p-4 border border-gray-100">
                <time className="font-inter text-xs text-accent-blue font-semibold">{date}</time>
                <p className="text-sm text-navy mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 職務経歴 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
            Work Experience
          </p>
          <h2 className="text-3xl font-bold text-navy mb-12">職務経歴</h2>

          <div className="flex flex-col gap-10">
            {workHistory.map(({ company, roles }) => (
              <div key={company}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1 h-8 bg-accent-blue rounded-full flex-shrink-0" />
                  <h3 className="text-xl font-bold text-navy">{company}</h3>
                </div>
                <div className="flex flex-col gap-4 pl-5">
                  {roles.map(({ title, description }) => (
                    <div
                      key={title}
                      className="bg-bg-light rounded-xl p-6 border border-gray-100"
                    >
                      <h4 className="font-semibold text-navy mb-3">{title}</h4>
                      <p className="text-text-sub text-sm leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
