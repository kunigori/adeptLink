import Link from "next/link";
import { contactEmail } from "@/data/config";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          <div>
            <p className="font-inter font-bold text-2xl tracking-widest text-white mb-3">
              ADEPTLINK
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              企業価値の最大化を支援する<br />経営コンサルティング事業
            </p>
          </div>

          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-gold mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Top" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/career", label: "Career" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-inter text-xs font-semibold uppercase tracking-widest text-accent-gold mb-4">
              Company Info
            </p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-400">
              <li>代表：國光 良昭</li>
              <li>所在地：千葉県船橋市</li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="mt-3 text-gray-500 text-xs leading-relaxed">
                事業内容：経営・業務・人事コンサルティング、<br />社外取締役・顧問の受託
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-gray-500">
            © ADEPTLINK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
