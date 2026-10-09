"use client";

import { useState } from "react";
import { useLang } from "./LanguageProvider";
import SectionHead from "./SectionHead";
import PhotoCard from "./PhotoCard";
import Lightbox, { type LightboxItem } from "./Lightbox";
import { facilities, welding } from "@/lib/data";

export default function Facilities() {
  const { t, l } = useLang();
  const [open, setOpen] = useState<LightboxItem | null>(null);

  return (
    <section id="fasilitas" className="section">
      <div className="wrap">
        <SectionHead title={t("fac_h2")} text={t("fac_p")} />

        <div className="grid grid-cols-2 gap-[18px] lg:grid-cols-4">
          {facilities.map((f, i) => (
            <PhotoCard
              key={`${f.src}-${i}`}
              src={f.src}
              caption={l(f.caption)}
              onOpen={() => setOpen({ src: f.src, caption: l(f.caption) })}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-3 border border-l-[6px] border-line border-l-brand-yellow bg-surface p-6 md:grid-cols-[auto_1fr] md:gap-x-10">
          <h3 className="text-[1.35rem] font-bold">{t("weld_h")}</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4">
            {welding.map((w) => (
              <li key={w.label.id} className="flex flex-col">
                <b className="font-display text-[2rem] font-extrabold leading-none text-brand-blue">{w.count}</b>
                <span className="text-[15.5px] text-muted">{l(w.label)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
