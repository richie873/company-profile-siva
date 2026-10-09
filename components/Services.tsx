"use client";

import { useLang } from "./LanguageProvider";
import SectionHead from "./SectionHead";
import { services } from "@/lib/data";

export default function Services() {
  const { t, l } = useLang();
  return (
    <section id="layanan" className="section band">
      <div className="wrap">
        <SectionHead title={t("svc_h2")} text={t("svc_p")} />
        <div>
          {services.map((s, i) => (
            <div
              key={s.title.id}
              className={[
                "grid gap-4 py-7 md:grid-cols-[.9fr_1.1fr] md:gap-x-14",
                i === 0 ? "border-t-2 border-ink" : "border-t border-line",
                i === services.length - 1 ? "border-b border-line" : "",
              ].join(" ")}
            >
              <div>
                <h3 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold">{l(s.title)}</h3>
                <p className="mt-2.5 max-w-[40ch] text-muted">{l(s.desc)}</p>
              </div>
              <ul className="md:columns-2 md:gap-x-8">
                {s.items.map((item) => (
                  <li
                    key={item.id}
                    className="relative break-inside-avoid py-[7px] pl-[22px] font-medium before:absolute before:left-0 before:top-[1.05em] before:h-[3px] before:w-[10px] before:bg-brand-yellow before:content-['']"
                  >
                    {l(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
