"use client";

export function FilterBar({
  categoryLabel,
  providerLabel,
  categories,
  providers,
  category,
  provider,
  onCategory,
  onProvider,
}: {
  categoryLabel: string;
  providerLabel: string;
  categories: { value: string; label: string }[];
  providers: { value: string; label: string }[];
  category: string;
  provider: string;
  onCategory: (value: string) => void;
  onProvider: (value: string) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted">{categoryLabel}</span>
        <div className="relative">
          <select
            value={category}
            onChange={(event) => onCategory(event.target.value)}
            className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-elevated/90 px-4 text-sm font-medium text-ink transition-all focus:border-gold focus:bg-soft focus:outline-none focus:ring-2 focus:ring-gold/20"
          >
            {categories.map((item) => (
              <option key={item.value} value={item.value} className="bg-night text-ink">
                {item.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gold">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </label>
      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted">{providerLabel}</span>
        <div className="relative">
          <select
            value={provider}
            onChange={(event) => onProvider(event.target.value)}
            className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-elevated/90 px-4 text-sm font-medium text-ink transition-all focus:border-gold focus:bg-soft focus:outline-none focus:ring-2 focus:ring-gold/20"
          >
            {providers.map((item) => (
              <option key={item.value} value={item.value} className="bg-night text-ink">
                {item.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gold">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </label>
    </div>
  );
}

