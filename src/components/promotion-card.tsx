import Image from "next/image";
import Link from "next/link";
import type { Promotion } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function PromotionCard({
  promotion,
  locale,
  cta,
  featured = false,
}: {
  promotion: Promotion;
  locale: Locale;
  cta: string;
  featured?: boolean;
}) {
  const promoUrl = localePath(locale, `/promotions/${promotion.slug}`);
  const statusLabel =
    promotion.status === "seasonal"
      ? locale === "zh"
        ? "限时特惠"
        : locale === "ms"
          ? "Tawaran Bermusim"
          : "Limited Seasonal"
      : locale === "zh"
        ? "常驻福利"
        : locale === "ms"
          ? "Bonus Aktif"
          : "Active Bonus";

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-elevated shadow-lg transition-all duration-300 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <Link href={promoUrl} className="relative block aspect-video overflow-hidden bg-night">
        <Image
          src={promotion.image}
          alt={t(promotion.imageAlt, locale)}
          fill
          sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-100"
        />

        {/* Shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-black/30" />

        {/* Floating Promo Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-night/85 px-3 py-1 text-xs font-bold text-gold-light uppercase backdrop-blur-md shadow-md">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            {statusLabel}
          </span>
        </div>
      </Link>

      <div className="p-6 bg-gradient-to-b from-elevated to-soft/90">
        <div className="text-xs font-semibold tracking-wider text-muted">
          {t(promotion.validity, locale)}
        </div>
        <h3 className="font-display mt-2 text-2xl font-normal text-ink group-hover:text-gold-light transition-colors">
          <Link href={promoUrl}>{t(promotion.title, locale)}</Link>
        </h3>
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {t(promotion.summary, locale)}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
          <span className="text-xs text-muted/80">{t(promotion.eligibility, locale)}</span>
          <Link
            href={promoUrl}
            className="inline-flex items-center gap-1.5 text-sm font-bold tracking-wider text-gold group-hover:text-gold-light uppercase transition-colors"
          >
            <span>{cta}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

