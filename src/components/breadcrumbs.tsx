import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  label,
}: {
  items: Crumb[];
  label: string;
}) {
  return (
    <nav aria-label={label} className="mb-6">
      <ol className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-muted backdrop-blur-md">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? <span aria-hidden="true" className="text-white/20">›</span> : null}
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "font-semibold text-gold" : undefined} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

