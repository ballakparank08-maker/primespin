import Image from "next/image";
import Link from "next/link";
import type { Provider } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function ProviderCard({
  provider,
  locale,
}: {
  provider: Provider;
  locale: Locale;
}) {
  return (
    <Link
      href={localePath(locale, `/providers/${provider.slug}`)}
      className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-elevated p-5 shadow-md transition-all duration-300 hover:border-gold/50 hover:bg-soft/60 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1"
    >
      {provider.logo ? (
        <span className="relative flex h-16 w-28 shrink-0 items-center justify-center rounded-2xl bg-white/[0.94] p-2 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <Image src={provider.logo} alt={provider.name} width={140} height={40} className="h-8 w-auto object-contain" />
        </span>
      ) : (
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-soft text-base font-bold tracking-wider text-gold shadow-sm">
          {provider.mark}
        </span>
      )}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-ink transition-colors group-hover:text-gold">{provider.name}</span>
          <span className="text-xs font-semibold text-emerald">✓ Verified</span>
        </div>
        <span className="mt-1.5 line-clamp-2 block text-sm leading-relaxed text-muted">{t(provider.description, locale)}</span>
      </div>
    </Link>
  );
}

