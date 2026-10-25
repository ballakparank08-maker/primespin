import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function MobileDownloadSection({
  locale,
  eyebrow,
  title,
  text,
  points,
  cta,
  href = "/download",
  level = "h2",
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  cta: string;
  href?: string;
  level?: "h1" | "h2";
}) {
  const Heading = level;

  return (
    <section className="shell py-16 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-elevated via-elevated to-soft/90 p-8 sm:p-12 lg:p-16 shadow-2xl">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 right-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/10 filter blur-[90px] pointer-events-none" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <Heading className="font-display mt-4 text-3xl font-normal text-ink sm:text-4xl lg:text-5xl">
              {title}
            </Heading>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{text}</p>

            {/* Checklist */}
            <ul className="mt-8 space-y-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink/90 sm:text-base">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold text-xs font-bold">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Platform Compatibility Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-ink">
                <span>🍏</span> iOS WebApp / Safari
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-ink">
                <span>🤖</span> Android Official APK
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3.5 py-1.5 text-xs font-semibold text-emerald">
                <span>🔒</span> Safe & Verified
              </span>
            </div>

            <div className="mt-8">
              <Link
                href={localePath(locale, href)}
                className="btn-gold inline-flex h-13 items-center justify-center rounded-full px-8 text-sm font-bold tracking-wider text-night uppercase shadow-lg shadow-gold/25"
              >
                {cta} →
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[680/913] w-full max-w-xs sm:max-w-sm">
            <div className="absolute inset-0 -inset-x-4 rounded-full bg-gold/15 filter blur-3xl" />
            <Image
              src="/assets/download/app-phone.webp"
              alt="PrimeSPIN open on a phone, showing the lobby"
              width={680}
              height={913}
              sizes="(max-width: 1024px) 80vw, 360px"
              className="relative z-10 h-auto w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter transition-transform duration-500 hover:scale-102"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

