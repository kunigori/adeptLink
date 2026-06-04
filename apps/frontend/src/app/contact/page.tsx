import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contactEmail } from "@/data/config";

export const metadata: Metadata = {
  title: "お問い合わせ｜ADEPTLINK",
  description:
    "ADEPTLINKへのご相談・お問い合わせはメールにて承っております。経営課題、業務改善、人材開発、社外取締役・顧問のご相談など、柔軟に対応いたします。",
};

export default function ContactPage() {
  const subject = encodeURIComponent("ADEPTLINKへのお問い合わせ");
  return (
    <>
      <PageHero
        label="Contact"
        title="お問い合わせ"
        description="ADEPTLINKへのご相談・お問い合わせは、メールにて承っております。経営課題、業務改善、人材開発、社外取締役・顧問のご相談など、企業の状況に応じて柔軟に対応いたします。"
      />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-bg-light rounded-2xl p-10 border border-gray-100 text-center">
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
              Email
            </p>
            <h2 className="text-2xl font-bold text-navy mb-4">メールでのお問い合わせ</h2>
            <p className="text-text-sub text-sm leading-relaxed mb-8">
              下記メールアドレスをクリックすると、お使いのメールソフトが起動します。
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="inline-block text-accent-blue font-inter font-semibold text-lg hover:underline mb-10"
            >
              {contactEmail}
            </a>

            <div className="flex flex-col items-center gap-4">
              <a
                href={`mailto:${contactEmail}?subject=${subject}`}
                className="inline-block bg-accent-blue text-white font-medium px-10 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 text-base"
              >
                メールで問い合わせる
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {[
              { label: "対応内容", value: "経営コンサルティング、業務コンサルティング、人事コンサルティング、事業開発・協業支援" },
              { label: "対応形式", value: "社外取締役・顧問の受託にも対応いたします" },
              { label: "返信目安", value: "ご連絡をいただき次第、順次ご返信いたします" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row gap-2 sm:gap-6 bg-bg-light rounded-xl p-4 border border-gray-100">
                <span className="text-xs font-medium text-text-sub sm:w-28 flex-shrink-0">{label}</span>
                <span className="text-sm text-navy">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
