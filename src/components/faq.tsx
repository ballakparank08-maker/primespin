import type { FaqItem } from "@/content/types";
import type { Locale } from "@/i18n/locale";
import { t } from "@/lib/utils";

export function Faq({
  items,
  locale,
  heading,
}: {
  items: FaqItem[];
  locale: Locale;
  heading?: string;
}) {
  return (
    <div className="space-y-4">
      {heading ? (
        <h2 className="font-display mb-6 text-3xl text-ink font-normal sm:text-4xl">
          {heading}
        </h2>
      ) : null}
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.id}
            className="group rounded-2xl border border-white/[0.08] bg-elevated/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:bg-elevated open:border-gold/30 open:bg-soft/70"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                <span className="text-base sm:text-lg font-medium text-ink group-hover:text-gold transition-colors">
                  {t(item.question, locale)}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gold font-bold transition-transform duration-300 group-open:rotate-45 group-open:bg-gold group-open:text-night"
                >
                  +
                </span>
              </span>
            </summary>
            <div className="mt-4 border-t border-white/[0.06] pt-4">
              <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base border-l-2 border-gold/50 pl-4">
                {t(item.answer, locale)}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

