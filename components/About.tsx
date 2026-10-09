"use client";

import { useLang } from "./LanguageProvider";
import { mission } from "@/lib/data";

export default function About() {
  const { t, l } = useLang();
  return (
    <section id="tentang" className="section">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold">{t("about_h2")}</h2>
            <p className="mt-5 max-w-[60ch] text-muted">{t("about_p")}</p>
          </div>
          <ol className="tl">
            <li>
              <b className="block font-display text-[1.6rem] font-extrabold leading-tight">1999</b>
              <span className="text-muted">{t("tl1")}</span>
            </li>
            <li>
              <b className="block font-display text-[1.6rem] font-extrabold leading-tight">2018</b>
              <span className="text-muted">{t("tl2")}</span>
            </li>
            <li>
              <b className="block font-display text-[1.6rem] font-extrabold leading-tight">{t("tl3_y")}</b>
              <span className="text-muted">{t("tl3")}</span>
            </li>
          </ol>
        </div>

        <div className="mt-[clamp(40px,6vw,72px)] grid gap-6 border-t-2 border-ink pt-8 md:grid-cols-[1fr_2fr] md:gap-x-14">
          <h3 className="text-[1.35rem] font-bold">{t("vision_h")}</h3>
          <p>{t("vision_p")}</p>
          <h3 className="text-[1.35rem] font-bold">{t("mission_h")}</h3>
          <ul className="list-disc space-y-1 pl-[1.1em]">
            {mission.map((m) => (
              <li key={m.id}>{l(m)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
