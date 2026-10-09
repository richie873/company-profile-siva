"use client";

import { useState } from "react";
import { useLang } from "./LanguageProvider";
import SectionHead from "./SectionHead";
import PhotoCard from "./PhotoCard";
import Lightbox, { type LightboxItem } from "./Lightbox";
import { categories, portfolio, type CategoryKey } from "@/lib/data";

const PAGE_SIZE = 12;

export default function Portfolio() {
  const { t, l } = useLang();
  const [category, setCategory] = useState<CategoryKey>("all");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [open, setOpen] = useState<LightboxItem | null>(null);

  const items = portfolio.filter((p) => category === "all" || p.category === category);

  return (
    <section id="portofolio" className="section band">
      <div className="wrap">
        <SectionHead title={t("pf_h2")} text={t("pf_p")} />

        <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              aria-pressed={category === c.key}
              onClick={() => {
                setCategory(c.key);
                setLimit(PAGE_SIZE);
              }}
              className={[
                "min-h-[44px] cursor-pointer rounded-[3px] border border-ink px-[18px] text-[15.5px] font-semibold",
                category === c.key ? "bg-ink text-paper" : "bg-transparent text-ink",
              ].join(" ")}
            >
              {l(c.label)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-[18px] md:grid-cols-3 md:gap-x-[18px] md:gap-y-[22px] lg:grid-cols-4">
          {items.slice(0, limit).map((p) => (
            <PhotoCard
              key={p.src}
              src={p.src}
              caption={l(p.caption)}
              onOpen={() => setOpen({ src: p.src, caption: l(p.caption) })}
            />
          ))}
        </div>

        {items.length > limit && (
          <div className="mt-9 flex justify-center">
            <button type="button" className="btn btn-ghost" onClick={() => setLimit((v) => v + PAGE_SIZE)}>
              {t("more")}
            </button>
          </div>
        )}
      </div>
      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
