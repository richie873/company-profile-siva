"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "./LanguageProvider";
import type { Key, Lang } from "@/lib/i18n";

const links: { href: string; key: Key }[] = [
  { href: "#layanan", key: "nav_services" },
  { href: "#tentang", key: "nav_about" },
  { href: "#fasilitas", key: "nav_facilities" },
  { href: "#portofolio", key: "nav_portfolio" },
  { href: "#kontak", key: "nav_contact" },
];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface">
      <div className="wrap flex min-h-[68px] items-center gap-5">
        <a href="#top" aria-label="PT Siva Parama Dhana" className="block rounded-[2px] bg-white p-1 leading-[0]">
          <Image src="/images/logo.png" alt="PT Siva Parama Dhana" width={528} height={100} priority className="h-10 w-auto" />
        </a>

        <nav
          id="nav"
          aria-label="Menu utama"
          className={[
            "ml-auto items-center gap-[26px] max-md:absolute max-md:inset-x-0 max-md:top-full max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:border-b max-md:border-line max-md:bg-surface max-md:px-[clamp(18px,4vw,40px)] max-md:pb-4 max-md:pt-2",
            open ? "flex" : "hidden md:flex",
          ].join(" ")}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b-2 border-transparent py-2 text-base font-semibold hover:border-brand-yellow max-md:border-line max-md:py-3.5"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 max-md:ml-auto">
          <div role="group" aria-label={t("lang_label")} className="inline-flex overflow-hidden rounded-[3px] border border-line">
            {(["id", "en"] as Lang[]).map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                className={[
                  "min-h-[44px] cursor-pointer px-3 text-sm font-semibold",
                  lang === code ? "bg-ink text-paper" : "bg-transparent text-muted",
                ].join(" ")}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#kontak" className="btn btn-primary btn-sm max-md:hidden">
            {t("cta_quote")}
          </a>
          <button
            type="button"
            aria-label={t("menu")}
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-[3px] border border-line bg-transparent text-ink md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
