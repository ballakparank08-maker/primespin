import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  alt,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line-gold/20 bg-gradient-to-b from-elevated/80 to-bg py-12 lg:py-20">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-gold/5 filter blur-[100px] pointer-events-none" />

      <div className="shell relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-night/80 px-3.5 py-1 text-xs font-bold tracking-wider text-gold uppercase backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {eyebrow}
            </div>
          ) : null}
          <h1 className="font-display mt-4 text-3xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{lede}</p>
        </div>
        <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 540px"
            className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

