import Image from "next/image";

export function LogoMarquee({
  items,
  label,
}: {
  items: { name: string; logo: string }[];
  label: string;
}) {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...items, ...items];

  return (
    <div className="marquee-container py-2" aria-label={label}>
      <ul className="marquee-track flex items-center">
        {marqueeItems.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="group flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-gold/10"
          >
            <div className="relative flex h-full w-full items-center justify-center">
              {/* Subtle backplate for light logos */}
              <div className="absolute inset-0 rounded-xl bg-white/[0.92] p-1.5 opacity-90 transition-opacity group-hover:opacity-100 shadow-sm" />
              <Image
                src={item.logo}
                alt={item.name}
                width={300}
                height={64}
                className="relative z-10 h-8 w-auto max-w-full object-contain filter transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

