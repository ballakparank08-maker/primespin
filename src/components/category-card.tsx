import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

const badges: Record<string, Record<Locale, string>> = {
  slots: { en: "High RTP Slots", ms: "Slot RTP Tinggi", zh: "高返奖率老虎机" },
  "live-casino": { en: "Live HD Streaming", ms: "Strim Kasino HD", zh: "高清真人荷官" },
  sports: { en: "Best Match Odds", ms: "Peluang Terbaik", zh: "超高体育赔率" },
  fishing: { en: "Boss Arcade", ms: "Arked Memancing", zh: "街机捕鱼神炮" },
  "4d": { en: "Official Results", ms: "Keputusan Sah", zh: "官方同步开奖" },
  lottery: { en: "Daily Payout", ms: "Bayaran Harian", zh: "每日即时开奖" },
  arcade: { en: "Instant Win", ms: "Menang Serta-merta", zh: "极速秒开秒赢" },
};

export function CategoryCard({
  category,
  locale,
  cta,
  large = false,
}: {
  category: Category;
  locale: Locale;
  cta: string;
  large?: boolean;
}) {
  const badgeText = badges[category.id]?.[locale] || "Verified Fair";

  return (
    <Link
      href={localePath(locale, `/games/${category.slug}`)}
      className={`group relative flex min-h-72 overflow-hidden rounded-3xl border border-white/10 bg-elevated shadow-lg transition-all duration-300 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 ${
        large ? "md:min-h-96 lg:col-span-2" : ""
      }`}
    >
      <Image
        src={category.image}
        alt={t(category.imageAlt, locale)}
        fill
        sizes={large ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] group-hover:brightness-95"
      />
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/15 transition-opacity group-hover:via-night/50" />

      {/* Floating Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-night/80 px-3 py-1 text-[11px] font-bold tracking-wider text-gold-light uppercase backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {badgeText}
        </span>
      </div>

      <div className="relative mt-auto p-6 sm:p-8 z-10">
        <h3 className="font-display text-3xl font-normal text-ink group-hover:text-gold-light transition-colors">
          {t(category.name, locale)}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/80">{t(category.description, locale)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold tracking-wider text-gold group-hover:text-gold-light uppercase">
          <span>{cta}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </span>
      </div>
    </Link>
  );
}

