"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLang } from "./LanguageProvider";

export type LightboxItem = { src: string; caption: string };

export default function Lightbox({ item, onClose }: { item: LightboxItem | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-label={item?.caption ?? "Foto"}
      className="m-auto w-full max-w-[min(960px,94vw)] rounded-[4px] bg-surface p-0 text-ink backdrop:bg-black/75"
    >
      {item && (
        <>
          <div className="relative h-[70vh] bg-[#0c1319]">
            <Image src={item.src} alt={item.caption} fill sizes="(min-width: 1024px) 960px, 94vw" className="object-contain" />
          </div>
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <b className="font-display text-[1.1rem] font-bold">{item.caption}</b>
            <button type="button" onClick={onClose} className="btn btn-ghost btn-sm">
              {t("close")}
            </button>
          </div>
        </>
      )}
    </dialog>
  );
}
