"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/i18n/locale";

type Item = { href: string; label: string };

export function MobileNav({
  locale,
  items,
  login,
  register,
  openLabel,
  closeLabel,
  languageLabel,
}: {
  locale: Locale;
  items: Item[];
  login: Item;
  register: Item;
  openLabel: string;
  closeLabel: string;
  languageLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="btn-glass inline-flex h-10 w-10 items-center justify-center rounded-xl lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? closeLabel : openLabel}</span>
        {open ? (
          <span aria-hidden="true" className="text-xl text-gold font-bold">
            ✕
          </span>
        ) : (
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-gold" />
            <span className="block h-0.5 w-3.5 rounded-full bg-ink" />
            <span className="block h-0.5 w-5 rounded-full bg-gold" />
          </span>
        )}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[100px] z-50 max-h-[calc(100vh-100px)] overflow-y-auto border-b border-line-gold/30 bg-night/95 p-6 backdrop-blur-2xl shadow-2xl lg:hidden"
        >
          <nav className="flex flex-col space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink/90 transition hover:bg-white/[0.05] hover:text-gold"
              >
                <span>{item.label}</span>
                <span className="text-gold/50 text-sm">→</span>
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-line/60">
            <div className="flex items-center justify-between py-2">
              <span className="text-xs uppercase tracking-wider text-muted font-semibold">{languageLabel}</span>
              <LanguageSwitcher locale={locale} label={languageLabel} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href={login.href}
                onClick={() => setOpen(false)}
                className="btn-glass flex h-11 items-center justify-center rounded-xl text-sm font-semibold"
              >
                {login.label}
              </Link>
              <Link
                href={register.href}
                onClick={() => setOpen(false)}
                className="btn-gold flex h-11 items-center justify-center rounded-xl text-sm font-bold tracking-wider uppercase"
              >
                {register.label}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

