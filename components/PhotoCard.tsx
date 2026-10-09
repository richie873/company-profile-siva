import Image from "next/image";

type Props = {
  src: string;
  caption: string;
  onOpen: () => void;
  sizes?: string;
};

export default function PhotoCard({ src, caption, onOpen, sizes = "(min-width: 1024px) 280px, 50vw" }: Props) {
  return (
    <figure>
      <button
        type="button"
        onClick={onOpen}
        aria-label={caption}
        className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-line"
      >
        <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
      </button>
      <figcaption className="pt-2.5 text-base font-semibold">{caption}</figcaption>
    </figure>
  );
}
