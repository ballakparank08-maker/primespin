import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function Hero({
  locale,
  eyebrow,
  title,
  lede,
  primary,
  secondary,
  imageAlt,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lede: string;
  primary: string;
  secondary: string;
  imageAlt: string;
}) {
  const stats = [
    {
      value: "99.4%",
      label: locale === "zh" ? "平均派彩回报率" : locale === "ms" ? "Kadar Pembayaran RTP" : "Certified RTP Rate",
    },
    {
      value: "< 3 Mins",
      label: locale === "zh" ? "极速存提款到账" : locale === "ms" ? "Deposit & Cuci Pantas" : "Avg. Cashout Speed",
    },
    {
      value: "2,500+",
      label: locale === "zh" ? "顶级认证电子游戏" : locale === "ms" ? "Permainan Terbukti Adil" : "Fair Play Games",
    },
    {
      value: "24/7/365",
      label: locale === "zh" ? "全天候专属真人客服" : locale === "ms" ? "Sokongan Pelanggan Langsung" : "Live VIP Support",
    },
  ];

  return (
    <section className="relative min-h-[38rem] overflow-hidden border-b border-line-gold/20 sm:min-h-[44rem] lg:min-h-[48rem]">
      {/* Background Graphic */}
      <Image
        src="/images/primespin-trusted.jpg"
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] filter brightness-[0.78] contrast-[1.08] sm:object-[70%_center]"
      />

      {/* Atmospheric Glow Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/65 to-night/20 sm:bg-gradient-to-r sm:from-night sm:via-night/80 sm:to-transparent" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gold/10 filter blur-[120px] pointer-events-none" />

      <div className="shell relative flex min-h-[38rem] flex-col justify-end py-12 sm:min-h-[44rem] sm:py-16 lg:min-h-[48rem] lg:justify-center">
        <div className="max-w-2xl">
          {/* Glowing Pill Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-night/80 px-4 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="animate-pulse-glow h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <span className="text-xs font-bold tracking-widest text-gold uppercase">{eyebrow}</span>
          </div>

          <h1 className="font-display mt-5 text-[2.35rem] leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/85 sm:text-lg">
            {lede}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={localePath(locale, "/register")}
              className="btn-gold inline-flex h-13 items-center justify-center rounded-full px-8 text-sm font-bold tracking-wider text-night uppercase shadow-lg shadow-gold/25 hover:shadow-gold/40"
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

          {/* Quick Features Strip */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-gold/40 pl-3">
                <div className="text-xl font-extrabold text-gradient-gold sm:text-2xl">{stat.value}</div>
                <div className="mt-0.5 text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

