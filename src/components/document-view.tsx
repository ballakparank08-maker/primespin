import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import type { DocumentPage } from "@/content/documents";
import type { FaqItem } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locale";
import { breadcrumbJson } from "@/lib/schema";
import { absoluteUrl, localePath } from "@/lib/site";
import { t } from "@/lib/utils";

export function DocumentView({
  locale,
  dict,
  doc,
  faqs,
}: {
  locale: Locale;
  dict: Dictionary;
  doc: DocumentPage;
  faqs?: FaqItem[];
}) {
  return (
    <div className="shell py-12">
      <JsonLd
        data={breadcrumbJson([
          { name: dict.common.home, url: absoluteUrl(locale) },
          { name: t(doc.title, locale), url: absoluteUrl(locale, doc.path) },
        ])}
      />
      <div className="mb-6">
        <Breadcrumbs
          label={dict.common.home}
          items={[
            { label: dict.common.home, href: localePath(locale) },
            { label: t(doc.title, locale) },
          ]}
        />
      </div>

      {/* Hero Banner Box */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-elevated via-elevated to-soft/80 p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-gold/10 filter blur-[90px] pointer-events-none" />
        
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-night/80 px-3.5 py-1 text-xs font-bold tracking-wider text-gold uppercase backdrop-blur-md">
              <span>📖</span>
              <span>OFFICIAL DOCUMENTATION</span>
            </div>
            <h1 className="font-display mt-4 text-3xl font-normal leading-tight text-ink sm:text-5xl lg:text-5xl">
              {t(doc.title, locale)}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{t(doc.lede, locale)}</p>
          </div>
          <div className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            <Image
              src={doc.image}
              alt={t(doc.imageAlt, locale)}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="prose-primespin mt-12 max-w-3xl">
        {doc.sections.map((section) => (
          <section key={t(section.heading, "en")} className="mb-10">
            <h2 className="relative flex items-center gap-3 text-2xl font-bold text-ink sm:text-3xl">
              <span className="h-6 w-1 rounded-full bg-gold inline-block" />
              <span>{t(section.heading, locale)}</span>
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={t(paragraph, "en").slice(0, 48)} className="mt-3 leading-relaxed">{t(paragraph, locale)}</p>
            ))}
            {section.list ? (
              <ul className="mt-4 space-y-2.5">
                {section.list.map((item) => (
                  <li key={t(item, "en").slice(0, 48)} className="flex items-start gap-2.5">
                    <span className="text-gold font-bold">›</span>
                    <span>{t(item, locale)}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      {faqs && faqs.length > 0 ? (
        <div className="mt-14 max-w-3xl border-t border-white/10 pt-10">
          <Faq items={faqs} locale={locale} heading={dict.common.faq} />
        </div>
      ) : null}

      <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6">
        <Link
          href={localePath(locale, "/guides")}
          className="btn-glass inline-flex h-11 items-center justify-center rounded-full px-6 text-xs font-bold tracking-wider text-gold uppercase"
        >
          ← {dict.nav.guides}
        </Link>
        <Link
          href={localePath(locale, "/register")}
          className="btn-gold inline-flex h-11 items-center justify-center rounded-full px-6 text-xs font-bold tracking-wider text-night uppercase"
        >
          {dict.nav.register} →
        </Link>
      </div>
    </div>
  );
}

