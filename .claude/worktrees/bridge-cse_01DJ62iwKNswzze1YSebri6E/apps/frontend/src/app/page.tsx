import Header      from "@/components/Header/Header";
import HeroOpening from "@/components/HeroOpening/HeroOpening";
import Footer       from "@/components/Footer/Footer";
import styles       from "./page.module.css";

/* ─── Services データ ─────────────────────────────────────────────────────── */
const services = [
  {
    num: "01",
    category: "中小企業向けDX推進支援",
    copy: "IT環境を整え、業務のムダを減らす。",
    body: `DXは、大きなシステムを導入することだけではありません。
まずは、今ある業務や契約、機器の状態を整理することから始まります。

EZ-Assetでは、中小企業の現場に合わせて、通信環境やIT設備、日々の業務フローを見直し、
無理なく進められるDXの第一歩を支援します。`,
    items: [
      "通信契約・インターネット契約の見直し",
      "複数契約の整理・一本化",
      "社内通信設備の確認",
      "業務に合ったIT環境の整理",
      "コスト削減につながるIT活用の提案",
      "現場担当者へのわかりやすい説明・運用支援",
    ],
  },
  {
    num: "02",
    category: "IT資産の再利用・適正処分支援",
    copy: "使えるものは活かし、不要なものは正しく手放す。",
    body: `オフィスや店舗には、まだ使える機器、処分方法がわからない設備、
保管されたままのIT資産が残っていることがあります。

EZ-Assetでは、社内にあるIT資産を確認し、再利用できるもの、処分すべきものを整理。
不要になった機器についても、適正な処分・再資源化につながる方法をご案内します。`,
    items: [
      "社内通信設備の再利用可否の確認",
      "不要IT機器の整理",
      "処分方法のアドバイス",
      "再資源化に向けた案内",
      "機器更新時の資産整理",
      "廃棄・保管・再利用の判断支援",
    ],
  },
  {
    num: "03",
    category: "IT資産・通信環境の見直し相談",
    copy: "契約・設備・運用を整理し、わかりやすく整える。",
    body: `通信契約が増えすぎている。
どの機器が必要かわからない。
古い設備を残すべきか、処分すべきか判断できない。

そんなITまわりの小さな違和感を、放置せず整理するための相談サービスです。

現状を確認し、必要なもの・不要なもの・改善できるものを明確にすることで、
事業に合ったIT環境づくりを支援します。`,
    items: [
      "通信契約の棚卸し",
      "IT機器・通信設備の現状確認",
      "契約コストの見直し",
      "不要資産の整理",
      "今後の設備更新に向けた相談",
      "専門業者との連携前の事前整理",
    ],
  },
];

const newsItems = [
  { date: "2026.XX.XX", text: "ホームページを公開しました" },
  { date: "2026.XX.XX", text: "中小企業向けDX推進支援を開始しました" },
  { date: "2026.XX.XX", text: "IT資産の適正処分・再資源化支援のご相談受付を開始しました" },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <Header />

      <main>
        {/* 1. ファーストビュー */}
        <HeroOpening />

        {/* 2. ブランドステートメント */}
        <section className={`${styles.section} ${styles.brandSection}`}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionHeading} ${styles.headingLarge}`}>
              見えないムダを整え、<br />
              使える資産を未来につなぐ。
            </h2>
            <div className={`${styles.prose} ${styles.proseLarge}`}>
              <p>会社の中には、まだ活かせるIT資産が眠っています。</p>
              <p>
                使わなくなった通信機器。<br />
                契約が重なったままの通信回線。<br />
                どこに相談すればよいかわからない処分方法。<br />
                更新されずに残った設備や、現場任せになっているIT環境。
              </p>
              <p>
                それらは、日々の業務の中では見過ごされやすいものです。<br />
                けれど、ひとつずつ見直すことで、コストを抑え、業務を整え、環境負荷を減らすことができます。
              </p>
              <p>
                EZ-Assetは、ITを難しいものとしてではなく、<br />
                事業を支える大切な資産として捉えます。
              </p>
              <p>
                中小企業が無理なくDXに取り組み、<br />
                使えるものを使い切り、不要なものは正しく循環させる。
              </p>
              <p>
                その積み重ねが、企業の未来と、社会の持続可能性につながると信じています。
              </p>
            </div>
          </div>
        </section>

        {/* 3. About 導線 */}
        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>About</p>
            <h2 className={styles.sectionHeading}>EZ-Assetについて</h2>
            <div className={styles.prose}>
              <p>
                EZ-Assetは、國光 綾香が運営する、中小企業向けのIT・DX支援事業です。
              </p>
              <p>
                通信契約や社内設備の見直し、IT資産の再利用、不要機器の適正処分まで、<br />
                企業のITまわりにある課題を、現場目線で整理します。
              </p>
              <p>
                専門用語を並べるのではなく、<br />
                「何を残すか」<br />
                「何を変えるか」<br />
                「何を手放すか」<br />
                を一緒に考え、実行できる形に落とし込みます。
              </p>
            </div>
            <div className={styles.ctaRow}>
              <a href="/about" className={styles.linkArrow}>
                EZ-Assetについて詳しく見る
                <span aria-hidden="true" className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. Services */}
        <section id="services" className={`${styles.section} ${styles.servicesSection}`}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Services</p>
            <h2 className={`${styles.sectionHeading} ${styles.headingWhite}`}>事業内容</h2>

            <div className={styles.serviceGrid}>
              {services.map((svc) => (
                <article key={svc.num} className={styles.serviceCard}>
                  <div className={styles.serviceNum}>{svc.num}</div>
                  <p className={styles.serviceCategory}>{svc.category}</p>
                  <h3 className={styles.serviceCopy}>{svc.copy}</h3>
                  <div className={styles.serviceDivider} />
                  <p className={styles.serviceBody}>{svc.body}</p>
                  <ul className={styles.serviceList}>
                    {svc.items.map((item) => (
                      <li key={item} className={styles.serviceListItem}>
                        <span className={styles.bullet} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 統合メッセージ */}
        <section className={`${styles.section} ${styles.integrationSection}`}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionHeading} ${styles.headingLarge}`}>
              DXと資産循環を、ひとつながりで考える。
            </h2>
            <div className={`${styles.prose} ${styles.proseLarge}`}>
              <p>
                ITを導入すること。<br />
                契約を見直すこと。<br />
                機器を再利用すること。<br />
                不要な設備を適正に処分すること。
              </p>
              <p>
                これらは別々の課題に見えて、実はすべてつながっています。
              </p>
              <p>
                EZ-Assetは、中小企業のIT環境を「使う」「整える」「手放す」まで一貫して考えます。
              </p>
              <p>
                ただ新しいものを増やすのではなく、<br />
                今ある資産を見直し、必要なものを活かし、不要なものを正しく循環させる。
              </p>
              <p>
                企業のコスト削減、業務改善、環境配慮を同時に進めるために、<br />
                EZ-Assetは現場に寄り添った支援を行います。
              </p>
            </div>
          </div>
        </section>

        {/* 6. 実績・信頼材料 */}
        <section className={`${styles.section} ${styles.trackSection}`}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Track Record</p>
            <h2 className={styles.sectionHeading}>支援実績</h2>

            <div className={styles.trackCard}>
              <div className={styles.trackClient}>
                <span className={styles.trackClientName}>レンタルスタジオ groovin&apos; 様</span>
              </div>
              <p className={styles.trackBody}>
                通信プロバイダの複数契約を見直し、契約の一本化を支援。
                あわせて、社内通信設備の再利用可否や不要設備の処分についても整理しました。
                <br /><br />
                複雑になっていた通信環境をわかりやすく整えることで、
                今後の運用や管理がしやすい状態づくりをサポートしました。
              </p>
              <ul className={styles.trackItems}>
                {[
                  "通信プロバイダ複数契約の一本化",
                  "社内通信設備の再利用提案",
                  "不要設備の処分指南",
                  "通信環境の整理",
                  "IT資産の棚卸し支援",
                ].map((item) => (
                  <li key={item} className={styles.trackItem}>
                    <span className={styles.bullet} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Case Study */}
        <section id="case-study" className={`${styles.section} ${styles.caseSection}`}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Case Study</p>
            <h2 className={`${styles.sectionHeading} ${styles.headingWhite}`}>事例紹介</h2>

            <div className={styles.caseCard}>
              <h3 className={styles.caseTitle}>
                通信契約の整理と社内通信設備の見直し支援
              </h3>
              <p className={styles.caseClient}>レンタルスタジオ groovin&apos; 様</p>

              <div className={styles.caseGrid}>
                <div className={styles.caseBlock}>
                  <h4 className={styles.caseBlockLabel}>課題</h4>
                  <p className={styles.caseBlockBody}>
                    複数の通信プロバイダ契約が存在し、契約内容や利用状況がわかりにくい状態になっていました。
                    また、社内通信設備についても、再利用できるものと処分すべきものの判断が必要でした。
                  </p>
                </div>

                <div className={styles.caseBlock}>
                  <h4 className={styles.caseBlockLabel}>支援内容</h4>
                  <p className={styles.caseBlockBody}>
                    EZ-Assetでは、通信契約の内容を確認し、必要な契約を整理。
                    複数契約の一本化に向けた提案を行いました。
                    <br /><br />
                    さらに、社内通信設備の状態を確認し、再利用できる設備と処分を検討すべき設備を整理。
                    適正な処分に向けた考え方もご案内しました。
                  </p>
                </div>

                <div className={`${styles.caseBlock} ${styles.caseBlockFull}`}>
                  <h4 className={styles.caseBlockLabel}>成果</h4>
                  <p className={styles.caseBlockBody}>
                    通信契約と設備状況が整理され、今後の管理がしやすい状態になりました。
                    不要な契約や設備を見直すことで、コストや管理負担の軽減につながる土台を整えました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. News */}
        <section id="news" className={`${styles.section} ${styles.newsSection}`}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>News</p>
            <h2 className={styles.sectionHeading}>ニュース</h2>

            <ul className={styles.newsList}>
              {newsItems.map((item, i) => (
                <li key={i} className={styles.newsItem}>
                  <time className={styles.newsDate}>{item.date}</time>
                  <p className={styles.newsText}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. Contact */}
        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionHeading} ${styles.headingWhite} ${styles.headingLarge}`}>
              ITまわりの整理、<br />
              まずはご相談ください。
            </h2>
            <div className={`${styles.prose} ${styles.proseWhite}`}>
              <p>
                通信契約を見直したい。<br />
                社内にあるIT機器を整理したい。<br />
                不要設備をどう処分すればよいかわからない。<br />
                DXを進めたいけれど、何から始めればよいかわからない。
              </p>
              <p>
                そんなお悩みがあれば、EZ-Assetにご相談ください。<br />
                現状を丁寧に確認し、事業に合った形で、無理のない改善方法をご提案します。
              </p>
            </div>
            <div className={styles.contactCta}>
              <a href="/contact" className={styles.btnGreen}>
                お問い合わせする
                <span aria-hidden="true" className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
