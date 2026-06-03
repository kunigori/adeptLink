"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./HeroOpening.module.css";

/* ─── SplitText: 1文字ずつアニメーション ────────────────────────────────── */
interface SplitTextProps {
  text: string;
  startDelay?: number; // ms
  charDuration?: number; // ms per char
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  startDelay = 0,
  charDuration = 60,
}) => {
  const characters = [...text];
  return (
    <span aria-label={text} className={styles.splitTextContainer}>
      <span aria-hidden="true" className={styles.splitTextLine}>
        {characters.map((char, i) => (
          <span
            key={i}
            className={styles.char}
            style={{ animationDelay: `${startDelay + i * charDuration}ms` }}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
    </span>
  );
};

/* ─── SVG 回路背景 ──────────────────────────────────────────────────────── */
const HeroSvgBackground: React.FC<{ translateY: number }> = ({ translateY }) => (
  <div
    className={styles.svgWrapper}
    style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
    aria-hidden="true"
  >
    <svg
      className={styles.bgSvg}
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* 回路トレース */}
      <path
        d="M100,150 L400,150 L500,250 L900,250 L950,200 L1300,200"
        className={`${styles.circuitLine} ${styles.lineNormal}`}
      />
      <path
        d="M200,700 L550,700 L650,600 L1100,600 L1200,700"
        className={`${styles.circuitLine} ${styles.lineSlow}`}
      />
      <path
        d="M1200,100 L1050,250 L1050,450 L850,650 L400,650"
        className={`${styles.circuitLine} ${styles.lineFast}`}
      />
      <path
        d="M0,400 L150,400 L200,350 L380,350"
        className={`${styles.circuitLine} ${styles.lineSlow}`}
      />
      <path
        d="M1440,550 L1280,550 L1200,480 L1050,480"
        className={`${styles.circuitLine} ${styles.lineNormal}`}
      />

      {/* 循環・再利用を示す円形パス */}
      <circle cx="720"  cy="450" r="180" className={`${styles.circuitCircle} ${styles.circlePulse}`} />
      <circle cx="350"  cy="300" r="60"  className={styles.circuitCircle} />
      <circle cx="1100" cy="500" r="90"  className={styles.circuitCircle} />
      <circle cx="200"  cy="650" r="40"  className={styles.circuitCircle} />

      {/* ノード点 */}
      <circle cx="400"  cy="150" r="4" className={styles.nodePoint} style={{ animationDelay: "0.5s" }} />
      <circle cx="500"  cy="250" r="5" className={styles.nodePoint} style={{ animationDelay: "1.2s" }} />
      <circle cx="900"  cy="250" r="4" className={styles.nodePoint} style={{ animationDelay: "0.8s" }} />
      <circle cx="550"  cy="700" r="4" className={styles.nodePoint} style={{ animationDelay: "2.0s" }} />
      <circle cx="650"  cy="600" r="5" className={styles.nodePoint} style={{ animationDelay: "1.5s" }} />
      <circle cx="1050" cy="250" r="4" className={styles.nodePoint} style={{ animationDelay: "2.3s" }} />
      <circle cx="850"  cy="650" r="6" className={styles.nodePoint} style={{ animationDelay: "0.2s" }} />
      <circle cx="1200" cy="200" r="3" className={styles.nodePoint} style={{ animationDelay: "1.8s" }} />
      <circle cx="200"  cy="400" r="3" className={styles.nodePoint} style={{ animationDelay: "2.5s" }} />
    </svg>
  </div>
);

/* ─── HeroOpening メインコンポーネント ─────────────────────────────────── */
export const HeroOpening: React.FC = () => {
  const [stage, setStage]                   = useState<"introLogo" | "mainContent">("introLogo");
  const [showMainElements, setShowMainElements] = useState(false);
  const [translateY, setTranslateY]         = useState(0);
  const [reducedMotion, setReducedMotion]   = useState(false);
  const [introLogoError, setIntroLogoError] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  /* prefers-reduced-motion 検出 & タイムライン制御 */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    if (mq.matches) {
      setStage("mainContent");
      setShowMainElements(true);
      return;
    }

    const t1 = setTimeout(() => setStage("mainContent"),   2200);
    const t2 = setTimeout(() => setShowMainElements(true), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  /* パララックス */
  useEffect(() => {
    if (reducedMotion) return;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const h = containerRef.current.offsetHeight;
      const s = window.scrollY;
      if (s <= h) setTranslateY(-20 + (s / h) * 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`${styles.heroContainer} ${reducedMotion ? styles.reducedMotion : ""}`}
      id="home-opening"
    >
      {/* フェーズ1: ロゴイントロオーバーレイ */}
      {stage === "introLogo" && (
        <div className={styles.introOverlay} aria-hidden="true">
          <div className={styles.introLogoWrapper}>
            {introLogoError ? (
              <div className={styles.fallbackTextLogo}>EZ-Asset</div>
            ) : (
              <img
                src="/logo/ez-asset.svg"
                alt=""
                className={styles.introLogoImg}
                onError={() => setIntroLogoError(true)}
              />
            )}
          </div>
        </div>
      )}

      {/* フェーズ2: メインファーストビュー */}
      <div className={`${styles.mainScene} ${stage === "mainContent" ? styles.sceneVisible : ""}`}>
        <HeroSvgBackground translateY={translateY} />

        <div className={styles.contentInner}>
          <header className={styles.copyBlock}>
            <h1 className={styles.mainHeadline}>
              {showMainElements ? (
                <>
                  <span className={styles.lineBreakPc}>
                    <SplitText text="ITを、使い切る。" startDelay={100} />
                  </span>
                  <span className={styles.lineBreakMobile}>
                    <SplitText text="ITを、" startDelay={100} />
                    <SplitText text="使い切る。" startDelay={400} />
                  </span>
                  <span className={styles.lineSecond}>
                    <SplitText text="事業を、前に進める。" startDelay={900} />
                  </span>
                </>
              ) : (
                <span className={styles.srOnly}>
                  ITを、使い切る。事業を、前に進める。
                </span>
              )}
            </h1>
            <div className={`${styles.accentBar} ${showMainElements ? styles.barAnimate : ""}`} />
          </header>

          <div className={`${styles.subContent} ${showMainElements ? styles.elementFadeIn : ""}`}>
            <p className={styles.subCopy}>
              EZ-Assetは、中小企業のDX推進支援と、IT資産の適正処分・再資源化を通じて、
              <br className={styles.desktopOnly} />
              企業の中に眠る「もったいない」を、次の成長につなげます。
              <br />
              <br />
              通信環境の見直し、IT機器の再利用、不要資産の整理、適正な処分まで。
              <br className={styles.desktopOnly} />
              現場に寄り添いながら、無理なく、わかりやすく、続けられるIT活用を支援します。
            </p>

            <div className={styles.ctaGroup}>
              <a href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                相談する
                <span className={styles.btnArrow} aria-hidden="true">→</span>
              </a>
              <a href="#services" className={`${styles.btn} ${styles.btnSecondary}`}>
                事業内容を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOpening;
