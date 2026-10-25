import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function CtaSection({
  locale,
  title,
  text,
  primary,
  secondary,
}: {
  locale: Locale;
  title: string;
  text: string;
  primary: string;
  secondary: string;
}) {
  return (
    <section className="shell py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-line-gold/30 bg-gradient-to-r from-elevated via-[#151922] to-elevated px-8 py-14 sm:px-14 sm:py-18 shadow-2xl">
        {/* Ambient Radial Lights */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 filter blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 h-72 w-72 rounded-full bg-ruby/5 filter blur-[90px] pointer-events-none" />
        
        {/* Top Metallic Border Glow */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-night/80 px-4 py-1 text-xs font-bold tracking-wider text-gold uppercase backdrop-blur-md">
            <span>👑</span>
            <span>VIP EXPERIENCE GUARANTEED</span>
          </div>

          <h2 className="font-display mt-5 text-3xl font-normal text-ink sm:text-5xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {text}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={localePath(locale, "/register")}
              className="btn-gold inline-flex h-13 items-center justify-center rounded-full px-8 text-sm font-bold tracking-wider text-night uppercase shadow-xl shadow-gold/25"
            >
              {primary}
            </Link>
            <Link
              href={localePath(locale, "/games")}
              className="btn-glass inline-flex h-13 items-center justify-center rounded-full px-8 text-sm font-semibold tracking-wider text-ink uppercase"
            >
              {secondary}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald">✓</span> 100% Encrypted Transactions
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald">✓</span> 0% Fee Banking
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald">✓</span> Instant Sign Up Under 1 Min
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

