"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Service",    href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "News",       href: "#news" },
  { label: "Contact",    href: "/contact" },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [logoError,  setLogoError]  = useState(false);
  // hero アニメーション終了後にロゴを表示（約 2.6s）
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ロゴは hero のオープニング完了後にフェードイン
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduced ? 0 : 2700;
    const timer = setTimeout(() => setLogoVisible(true), delay);
    return () => clearTimeout(timer);
  }, []);

  // メニューが開いているとき body スクロールをロック
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <div className={styles.inner}>
        {/* ロゴ */}
        <a
          href="/"
          className={`${styles.logo} ${logoVisible ? styles.logoVisible : ""}`}
          aria-label="EZ-Asset トップページ"
        >
          {logoError ? (
            <span className={styles.logoFallback}>EZ-Asset</span>
          ) : (
            <img
              src="/logo/ez-asset.svg"
              alt="EZ-Asset"
              width={140}
              height={30}
              onError={() => setLogoError(true)}
            />
          )}
        </a>

        {/* デスクトップ ナビゲーション */}
        <nav className={styles.nav} aria-label="グローバルナビゲーション">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact ボタン */}
        <a href="/contact" className={styles.contactBtn}>
          Contact
        </a>

        {/* ハンバーガーボタン（モバイル） */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="モバイルナビゲーション">
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
