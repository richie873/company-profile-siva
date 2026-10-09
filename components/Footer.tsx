import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-7 text-[15.5px] text-muted">
      <div className="wrap flex flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  );
}
