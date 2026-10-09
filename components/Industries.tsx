"use client";

import { useLang } from "./LanguageProvider";
import SectionHead from "./SectionHead";
import { industries } from "@/lib/data";

export default function Industries() {
  const { t, l } = useLang();
  return (
    <section id="industri" className="section band">
      <div className="wrap">
        <SectionHead title={t("ind_h2")} text={t("ind_p")} />
        <ul className="grid grid-cols-2 border-l border-t border-line md:grid-cols-4">
          {industries.map((item) => (
            <li
              key={item.id}
              className="border-b border-r border-line bg-surface px-5 py-[22px] font-display text-[1.1rem] font-bold"
            >
              {l(item)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
