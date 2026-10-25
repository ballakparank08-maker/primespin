import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav } from "@/components/mobile-nav";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = [
    { href: localePath(locale, "/games"), label: dict.nav.games },
    { href: localePath(locale, "/promotions"), label: dict.nav.promotions },
    { href: localePath(locale, "/vip"), label: dict.nav.vip },
    { href: localePath(locale, "/download"), label: dict.nav.download },
    { href: localePath(locale, "/guides"), label: dict.nav.guides },
    { href: localePath(locale, "/payment-methods"), label: dict.nav.payment },
    { href: localePath(locale, "/contact"), label: dict.nav.support },
  ];
  const login = { href: localePath(locale, "/login"), label: dict.nav.login };
  const register = { href: localePath(locale, "/register"), label: dict.nav.register };

  const tickerText =
    locale === "zh"
      ? "🔥 累积大奖 MYR 8,888,888.00 ｜ ⚡ 3分钟极速存取款 ｜ 🎁 100% 首存迎新豪礼 ｜ 🔒 官方正版认证"
      : locale === "ms"
        ? "🔥 JACKPOT TERKUMPUL: MYR 8,888,888.00 ｜ ⚡ PENGELUARAN PANTAS 3 MINIT ｜ 🎁 BONUS ALU-ALUAN 100% ｜ 🔒 DISAHKAN RASMI"
        : "🔥 MEGA JACKPOT: MYR 8,888,888.00 ｜ ⚡ INSTANT 3-MIN WITHDRAWAL ｜ 🎁 100% WELCOME BONUS ｜ 🔒 OFFICIALLY CERTIFIED";

  return (
    <header className="sticky top-0 z-50">
      {/* Top VIP / Live Ticker Strip */}
      <div className="border-b border-white/[0.06] bg-night/95 px-4 py-1.5 text-xs text-muted backdrop-blur-md">
        <div className="shell flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-[11px] font-medium tracking-wide sm:text-xs">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="animate-pulse-glow h-1.5 w-1.5 rounded-full bg-emerald" />
            </span>
            <span className="truncate text-ink/90">{tickerText}</span>
          </div>
          <div className="hidden shrink-0 items-center gap-3 text-[11px] font-semibold tracking-wider text-gold sm:flex">
            <span>24/7 LIVE SUPPORT</span>
            <span className="text-line">•</span>
            <span>RNG TESTED</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <div className="border-b border-line-gold/20 bg-bg/85 backdrop-blur-xl">
        <div className="shell flex h-16 items-center gap-3 md:h-18">
          <Link href={localePath(locale)} className="group mr-3 shrink-0 py-1 transition-transform hover:scale-[1.02]">
            <BrandLogo className="h-9 w-auto filter drop-shadow-[0_0_12px_rgba(212,175,55,0.25)] md:h-10" />
          </Link>
          <MobileNav
            locale={locale}
            items={items}
            login={login}
            register={register}
            openLabel={dict.nav.openMenu}
            closeLabel={dict.nav.closeMenu}
            languageLabel={dict.nav.language}
          />
          <nav className="ml-2 hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Primary">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition-all duration-200 hover:bg-white/[0.04] hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher locale={locale} label={dict.nav.language} />
            </div>
            <Link
              href={login.href}
              className="btn-glass inline-flex h-9 items-center rounded-full px-4 text-xs font-semibold sm:h-10 sm:px-5 sm:text-sm"
            >
              {login.label}
            </Link>
            <Link
              href={register.href}
              className="btn-gold inline-flex h-9 items-center rounded-full px-4 text-xs tracking-wider uppercase sm:h-10 sm:px-6 sm:text-sm"
            >
              {register.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

