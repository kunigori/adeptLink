"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contactEmail } from "@/data/config";

const navLinks = [
  { href: "/", label: "Top" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/career", label: "Career" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const subject = encodeURIComponent("ADEPTLINKへのお問い合わせ");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-inter font-bold text-xl tracking-widest text-navy">
            ADEPTLINK
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-inter text-sm font-medium transition-colors duration-200 ${
                pathname === href
                  ? "text-accent-blue"
                  : "text-text-sub hover:text-navy"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={`mailto:${contactEmail}?subject=${subject}`}
            className="bg-accent-blue text-white font-inter text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium py-2 ${
                pathname === href ? "text-accent-blue" : "text-text-main"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={`mailto:${contactEmail}?subject=${subject}`}
            className="bg-accent-blue text-white text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-blue-700 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
