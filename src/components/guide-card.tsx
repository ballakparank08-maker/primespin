import Image from "next/image";
import Link from "next/link";
import { guideCategoryLabels } from "@/content/guides";
import type { Guide } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function GuideCard({ guide, locale }: { guide: Guide; locale: Locale }) {
  const guideUrl = localePath(locale, `/guides/${guide.slug}`);

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-elevated shadow-md transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1">
      <Link href={guideUrl} className="relative block aspect-video overflow-hidden bg-night">
        <Image
          src={guide.cover}
          alt={t(guide.coverAlt, locale)}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-night/85 px-3 py-1 text-[11px] font-bold text-gold-light uppercase backdrop-blur-md">
            {guideCategoryLabels[guide.category][locale]}
          </span>
        </div>
      </Link>
      <div className="p-6 bg-gradient-to-b from-elevated to-soft/80">
        <h3 className="line-clamp-2 text-lg font-bold text-ink transition-colors group-hover:text-gold sm:text-xl">
          <Link href={guideUrl}>{t(guide.title, locale)}</Link>
        </h3>
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted">{t(guide.excerpt, locale)}</p>
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3 text-xs">
          <span className="text-muted/80">{guide.publishedAt}</span>
          <Link href={guideUrl} className="font-semibold text-gold transition-colors hover:text-gold-light">
            Read Guide →
          </Link>
        </div>
      </div>
    </article>
  );
}

