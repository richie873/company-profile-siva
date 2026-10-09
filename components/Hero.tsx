"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";
import { site } from "@/lib/site";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="pb-12 pt-10 md:pb-24 md:pt-20">
      <div className="wrap grid items-center gap-8 md:grid-cols-[1.15fr_.85fr] md:gap-16">
        <div>
          <h1 className="text-[clamp(2.5rem,6.4vw,5.1rem)] font-extrabold">{t("hero_h1")}</h1>
          <p className="mt-6 max-w-[60ch] text-[1.15rem] text-muted">{t("hero_p")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontak" className="btn btn-primary">{t("cta_quote")}</a>
            <a href="#portofolio" className="btn btn-ghost">{t("cta_portfolio")}</a>
          </div>

          <div className="hdim">
            <i />
            <span className="ln" />
            <b>{site.tagline}</b>
            <span className="ln" />
            <i className="r" />
          </div>

          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2 text-[15.5px] text-muted">
            <span>{t("fact1")}</span>
            <span>{t("fact2")}</span>
            <span>{t("fact3")}</span>
          </div>
        </div>

        <div className="blueprint relative grid aspect-[1/1.02] max-w-[460px] place-items-center border border-line p-[8%] md:max-w-none" aria-hidden="true">
          <Image
            src="/images/hero-machine.webp"
            alt=""
            width={700}
            height={725}
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="h-auto max-h-full w-full object-contain"
          />
          <span className="vdim" />
          <small className="absolute right-6 top-1/2 -translate-y-1/2 rotate-180 text-[13px] text-muted [writing-mode:vertical-rl]">
            {t("plate_cap")}
          </small>
        </div>
      </div>
    </section>
  );
}
