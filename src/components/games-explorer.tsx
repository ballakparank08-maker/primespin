"use client";

import { useMemo, useState } from "react";
import { FilterBar } from "@/components/filter-bar";
import { GameGrid } from "@/components/game-grid";
import { SearchBar } from "@/components/search-bar";
import type { Game } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";

export type ExplorerGame = Game;

export function GamesExplorer({
  games,
  locale,
  dict,
  categories,
  providers,
  initialCategory = "all",
}: {
  games: ExplorerGame[];
  locale: Locale;
  dict: Dictionary;
  categories: { value: string; label: string }[];
  providers: { value: string; label: string }[];
  initialCategory?: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [provider, setProvider] = useState("all");
  const [sort, setSort] = useState<"all" | "featured" | "popular" | "latest">("all");

  const visible = useMemo(() => {
    const filtered = games.filter((game) => {
      const matchesQuery = game.name.toLowerCase().includes(query.trim().toLowerCase());
      const matchesCategory = category === "all" || game.categoryId === category;
      const matchesProvider = provider === "all" || game.providerId === provider;
      const matchesSort =
        sort === "all" ||
        (sort === "featured" && game.featured) ||
        (sort === "popular" && game.popular) ||
        sort === "latest";
      return matchesQuery && matchesCategory && matchesProvider && matchesSort;
    });
    if (sort === "latest") {
      return [...filtered].sort((a, b) => (a.addedAt < b.addedAt ? 1 : -1));
    }
    return filtered;
  }, [games, query, category, provider, sort]);

  const sorts = [
    { id: "all" as const, label: dict.common.all },
    { id: "featured" as const, label: dict.common.featured },
    { id: "popular" as const, label: dict.common.popular },
    { id: "latest" as const, label: dict.common.latest },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-elevated/70 p-6 backdrop-blur-xl shadow-xl">
        <SearchBar
          label={dict.common.searchLabel}
          placeholder={dict.common.searchPlaceholder}
          value={query}
          onChange={setQuery}
        />
        <div className="mt-4">
          <FilterBar
            categoryLabel={dict.common.category}
            providerLabel={dict.common.provider}
            categories={categories}
            providers={providers}
            category={category}
            provider={provider}
            onCategory={setCategory}
            onProvider={setProvider}
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label={dict.common.featured}>
            {sorts.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSort(item.id)}
                className={`h-9 rounded-full px-4 text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  sort === item.id
                    ? "btn-gold shadow-md"
                    : "btn-glass text-muted hover:text-ink"
                }`}
                aria-pressed={sort === item.id}
              >
                {item.label}
              </button>
            ))}
            {(query || category !== "all" || provider !== "all" || sort !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                  setProvider("all");
                  setSort("all");
                }}
                className="h-9 rounded-full px-3 text-xs font-semibold text-muted transition hover:text-ruby"
              >
                ✕ {dict.common.clear}
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-muted">
            <span className="text-gold font-bold">{visible.length}</span> {locale === "zh" ? "款游戏" : "Games Available"}
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-elevated/60 px-6 py-16 text-center shadow-lg backdrop-blur-md">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.04] text-2xl text-gold">
            🔍
          </div>
          <h2 className="mt-4 text-2xl font-bold text-ink">{dict.common.noResultsTitle}</h2>
          <p className="mt-2 text-sm text-muted">{dict.common.noResultsText}</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setProvider("all");
              setSort("all");
            }}
            className="btn-gold mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 text-xs font-bold tracking-wider uppercase"
          >
            {dict.common.clear}
          </button>
        </div>
      ) : (
        <GameGrid games={visible} locale={locale} cta={dict.common.viewGame} />
      )}
    </div>
  );
}

