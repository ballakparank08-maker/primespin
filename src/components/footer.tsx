import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const columns = [
    {
      title: "PrimeSPIN",
      links: [
        { href: localePath(locale, "/about"), label: dict.footer.about },
        { href: localePath(locale, "/contact"), label: dict.footer.contact },
        { href: localePath(locale, "/responsible-gaming"), label: dict.footer.responsible },
      ],
    },
    {
      title: dict.footer.games,
      links: [
        { href: localePath(locale, "/games/slots"), label: "Slots" },
        { href: localePath(locale, "/games/live-casino"), label: locale === "zh" ? "真人娱乐场" : locale === "ms" ? "Kasino Langsung" : "Live Casino" },
        { href: localePath(locale, "/games/sports"), label: locale === "zh" ? "体育" : locale === "ms" ? "Sukan" : "Sports" },
        { href: localePath(locale, "/games/fishing"), label: locale === "zh" ? "捕鱼" : locale === "ms" ? "Memancing" : "Fishing" },
        { href: localePath(locale, "/games/4d"), label: "4D" },
      ],
    },
    {
      title: dict.footer.support,
      links: [
        { href: localePath(locale, "/payment-methods"), label: dict.nav.payment },
        { href: localePath(locale, "/deposit"), label: locale === "zh" ? "存款" : locale === "ms" ? "Deposit" : "Deposit" },
        { href: localePath(locale, "/withdrawal"), label: locale === "zh" ? "提款" : locale === "ms" ? "Pengeluaran" : "Withdrawal" },
        { href: localePath(locale, "/faq"), label: dict.footer.faq },
      ],
    },
    {
      title: dict.footer.guides,
      links: [
        { href: localePath(locale, "/guides/getting-started"), label: dict.footer.gettingStarted },
        { href: localePath(locale, "/guides/mobile-access"), label: dict.footer.mobile },
        { href: localePath(locale, "/guides/account-security"), label: dict.footer.security },
        { href: localePath(locale, "/guides/slots-on-primespin"), label: dict.footer.gameGuides },
      ],
    },
  ];

  return (
    <footer className="border-t border-line-gold/20 bg-night/95">
      {/* Trust & Certifications Bar */}
      <div className="border-b border-white/[0.06] bg-black/40 py-6">
        <div className="shell flex flex-wrap items-center justify-between gap-6 text-xs text-muted">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold font-bold">
              18+
            </span>
            <span>
              <strong className="block text-ink font-semibold">Strictly 18+ Only</strong>
              <span>Play Responsibly. Gaming should remain entertaining.</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-wider text-muted/90 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald">🔒</span> 256-BIT SSL SECURED
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-gold">🎲</span> RNG CERTIFIED FAIR
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-gold">🛡</span> LICENSED OPERATOR
            </span>
          </div>
        </div>
      </div>

      <div className="shell grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <BrandLogo className="h-10 w-auto filter drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
          <p className="mt-4 text-sm leading-relaxed text-muted">{dict.footer.blurb}</p>
          <div className="mt-6 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs text-muted">Systems 100% Operational</span>
          </div>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-bold tracking-wider text-ink uppercase">{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.06] bg-black/30">
        <div className="shell flex flex-col gap-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PrimeSPIN Malaysia. {dict.footer.rights}</p>
          <div className="flex flex-wrap gap-6 font-medium">
            <Link href={localePath(locale, "/terms")} className="hover:text-gold transition-colors">
              {dict.footer.terms}
            </Link>
            <Link href={localePath(locale, "/privacy")} className="hover:text-gold transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href={localePath(locale, "/responsible-gaming")} className="hover:text-gold transition-colors">
              {dict.footer.responsible}
            </Link>
          </div>
        </div>
        <p className="shell pb-8 text-xs leading-5 text-muted/70">{dict.footer.age}</p>
      </div>
    </footer>
  );
}

