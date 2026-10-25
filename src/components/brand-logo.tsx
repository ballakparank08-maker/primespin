export function BrandLogo({ className = "h-9 w-auto md:h-10" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* PrimeSPIN Emblem */}
      <svg
        className="h-full w-auto shrink-0 filter drop-shadow-[0_0_12px_rgba(229,184,66,0.45)]"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="primeGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2BF" />
            <stop offset="35%" stopColor="#E6B84A" />
            <stop offset="70%" stopColor="#D4A12B" />
            <stop offset="100%" stopColor="#8A5A0A" />
          </linearGradient>
          <linearGradient id="primeRing" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A12B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFF2BF" />
            <stop offset="100%" stopColor="#8A5A0A" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="primeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E6B84A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E6B84A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Back Glow */}
        <circle cx="22" cy="22" r="20" fill="url(#primeGlow)" />

        {/* Outer Rotating/Spin Ring with Tick Marks */}
        <circle
          cx="22"
          cy="22"
          r="19"
          stroke="url(#primeRing)"
          strokeWidth="1.75"
          strokeDasharray="4 2.5"
        />

        {/* Hexagon Shield */}
        <polygon
          points="22,6 35,13.5 35,28.5 22,36 9,28.5 9,13.5"
          fill="#0B0D13"
          stroke="url(#primeGold)"
          strokeWidth="1.5"
        />

        {/* Inner Diamond Crown Geometry */}
        <polygon
          points="22,10 31,16 22,32 13,16"
          fill="url(#primeGold)"
          fillOpacity="0.2"
        />
        <polygon
          points="22,10 27,16 22,28 17,16"
          fill="url(#primeGold)"
          fillOpacity="0.5"
        />

        {/* Central Crown Peak / Star */}
        <path
          d="M22 13L24 18L29 16L26 22L22 24L18 22L15 16L20 18L22 13Z"
          fill="url(#primeGold)"
        />

        {/* Sparkling Center Stone */}
        <polygon
          points="22,18 23.5,21 22,23 20.5,21"
          fill="#FFFFFF"
        />
      </svg>

      {/* Typography: PrimeSPIN */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline tracking-tight">
          <span className="font-extrabold text-[1.35rem] tracking-tight bg-gradient-to-r from-[#FFF4CE] via-[#E8BA4D] to-[#D4A12B] bg-clip-text text-transparent">
            Prime
          </span>
          <span className="font-black text-[1.35rem] tracking-wide text-ink drop-shadow-[0_2px_10px_rgba(212,161,43,0.3)]">
            SPIN
          </span>
          <span className="ml-1 text-[10px] text-gold animate-pulse">✦</span>
        </div>
        <span className="text-[8px] font-bold tracking-[0.28em] text-gold/80 uppercase">
          VIP MALAYSIA
        </span>
      </div>
    </div>
  );
}

