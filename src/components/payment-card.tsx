import Image from "next/image";
import type { PaymentMethod } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { t } from "@/lib/utils";

export function PaymentCard({
  method,
  locale,
  depositLabel,
  withdrawalLabel,
}: {
  method: PaymentMethod;
  locale: Locale;
  depositLabel: string;
  withdrawalLabel: string;
}) {
  return (
    <article className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-elevated p-6 shadow-md transition-all duration-300 hover:border-gold/50 hover:bg-soft/70 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wider text-emerald uppercase">Gateway Active</span>
            </div>
            <h3 className="mt-1 text-xl font-bold text-ink group-hover:text-gold transition-colors">{method.name}</h3>
          </div>
          <span className="flex h-14 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/[0.95] p-2 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image src={method.logo} alt={method.name} width={120} height={48} className="h-8 w-auto object-contain" />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t(method.summary, locale)}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/[0.08] pt-4">
        {method.deposit ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 text-xs font-semibold text-emerald">
            <span>⚡</span> {depositLabel}
          </span>
        ) : null}
        {method.withdrawal ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-light">
            <span>⚡</span> {withdrawalLabel}
          </span>
        ) : null}
      </div>
    </article>
  );
}

