import Image from "next/image";
import Link from "next/link";
import { getProvider } from "@/content/providers";
import { getCategory } from "@/content/categories";
import type { Game } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function GameCard({
  game,
  locale,
  cta,
}: {
  game: Game;
  locale: Locale;
  cta: string;
}) {
  const provider = getProvider(game.providerId);
  const category = getCategory(game.categoryId);
  const gameUrl = localePath(locale, `/games/${game.slug}`);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-elevated transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1">
      {/* Game Poster Container */}
      <Link href={gameUrl} className="relative block aspect-[3/4] overflow-hidden bg-night">
        <Image
          src={game.image}
          alt={t(game.imageAlt, locale)}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
        />

        {/* Shading Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 z-10">
          {game.popular ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-ruby/90 px-2.5 py-0.5 text-[10px] font-black tracking-wider text-white uppercase backdrop-blur-md shadow-md shadow-ruby/30">
              <span className="text-xs">🔥</span> HOT
            </span>
          ) : game.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-gold/90 px-2.5 py-0.5 text-[10px] font-black tracking-wider text-night uppercase backdrop-blur-md shadow-md shadow-gold/30">
              <span className="text-xs">⭐</span> TOP
            </span>
          ) : (
            <span />
          )}

          {provider?.name ? (
            <span className="rounded-full bg-night/80 px-2 py-0.5 text-[10px] font-semibold text-muted backdrop-blur-md">
              {provider.name}
            </span>
          ) : null}
        </div>

        {/* Play Now Hover Button Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-night/70 p-4 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 z-20">
          <span className="btn-gold flex h-11 w-11 items-center justify-center rounded-full shadow-lg shadow-gold/40 transition-transform duration-300 group-hover:scale-110">
            <svg className="ml-0.5 h-5 w-5 fill-night" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="mt-3 text-xs font-bold tracking-widest text-gold-light uppercase drop-shadow">
            {cta}
          </span>
        </div>
      </Link>

      {/* Info Box */}
      <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4 bg-gradient-to-b from-elevated to-soft/80">
        <div>
          <p className="text-[11px] font-bold tracking-wider text-gold/80 uppercase">
            {category ? t(category.name, locale) : game.categoryId}
          </p>
          <h3 className="mt-1 line-clamp-1 text-sm font-bold text-ink transition-colors group-hover:text-gold sm:text-base">
            <Link href={gameUrl}>{game.name}</Link>
          </h3>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-2 text-xs">
          <span className="text-muted">{provider?.name ?? "PrimeSPIN"}</span>
          <Link
            href={gameUrl}
            className="font-semibold text-gold transition-colors hover:text-gold-light"
          >
            {cta} →
          </Link>
        </div>
      </div>
    </article>
  );
}

