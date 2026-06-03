import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Home",           href: "/" },
  { label: "About",          href: "/about" },
  { label: "Service",        href: "#services" },
  { label: "Case Study",     href: "#case-study" },
  { label: "News",           href: "#news" },
  { label: "Contact",        href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* ブランドコピー */}
        <div className={styles.brand}>
          <p className={styles.brandCopy}>
            ITを、使い切る。<br />
            事業を、前に進める。
          </p>

          <div className={styles.companyInfo}>
            <p className={styles.companyName}>EZ-Asset</p>
            <p>代表　國光 綾香</p>
            <p>事業内容　中小企業のDX推進支援 ／ IT資産の適正処分・再資源化事業</p>
          </div>
        </div>

        {/* ナビゲーション */}
        <nav aria-label="フッターナビゲーション">
          <ul className={styles.navList}>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* コピーライト */}
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} EZ-Asset. All rights reserved.</p>
      </div>
    </footer>
  );
}
