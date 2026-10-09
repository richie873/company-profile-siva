"use client";

import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { services } from "@/lib/data";
import { site } from "@/lib/site";

const field =
  "min-h-[48px] w-full rounded-[3px] border border-muted bg-paper p-3 text-[17px] text-ink";

export default function Contact() {
  const { t, l } = useLang();
  const [typeIndex, setTypeIndex] = useState(0);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const typeLabel = typeIndex < services.length ? l(services[typeIndex].title) : t("other");
    const text = [
      t("wa_hello"),
      "",
      `${t("wa_name")}: ${f.get("name")}`,
      `${t("wa_company")}: ${f.get("company") || "-"}`,
      `${t("wa_type")}: ${typeLabel}`,
      `${t("wa_need")}: ${f.get("msg")}`,
    ].join("\n");
    window.open(`https://wa.me/${site.waNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <section id="kontak" className="section">
      <div className="wrap grid gap-8 md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold">{t("ct_h2")}</h2>
          <p className="mt-5 max-w-[60ch] text-muted">{t("ct_p")}</p>
          <dl className="mt-7 grid gap-[18px]">
            <div>
              <dt className="mb-0.5 font-bold">{t("ct_addr_h")}</dt>
              <dd className="text-muted">{site.address}</dd>
            </div>
            <div>
              <dt className="mb-0.5 font-bold">{t("ct_phone_h")}</dt>
              <dd>
                <a className="font-semibold text-brand-blue" href={`https://wa.me/${site.waNumber}`}>
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <a className="font-semibold text-brand-blue" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                {t("ct_map")}
              </a>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 border border-line bg-surface p-[clamp(20px,3vw,32px)]">
          <label className="grid gap-1.5 text-base font-semibold">
            <span>{t("f_name")}</span>
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="grid gap-1.5 text-base font-semibold">
            <span>{t("f_company")}</span>
            <input name="company" autoComplete="organization" className={field} />
          </label>
          <label className="grid gap-1.5 text-base font-semibold">
            <span>{t("f_type")}</span>
            <select value={typeIndex} onChange={(e) => setTypeIndex(Number(e.target.value))} className={field}>
              {services.map((s, i) => (
                <option key={s.title.id} value={i}>
                  {l(s.title)}
                </option>
              ))}
              <option value={services.length}>{t("other")}</option>
            </select>
          </label>
          <label className="grid gap-1.5 text-base font-semibold">
            <span>{t("f_msg")}</span>
            <textarea name="msg" required className={`${field} min-h-[120px] resize-y`} />
          </label>
          <button type="submit" className="btn btn-primary">
            {t("f_send")}
          </button>
        </form>
      </div>
    </section>
  );
}
