export default function SectionHead({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-[clamp(32px,5vw,56px)] grid items-end gap-6 md:grid-cols-2 md:gap-x-14">
      <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold">{title}</h2>
      <p className="max-w-[60ch] text-muted">{text}</p>
    </div>
  );
}
