"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/images/primespin-trusted.jpg", title: "PrimeSPIN - Verified & Guaranteed 100% Safe" },
  { src: "/images/primespin-halloween.jpg", title: "PrimeSPIN - 50% Halloween Offer" },
  { src: "/images/elitbahis.jpg", title: "Sports & Casino Action" },
];

export function BouncingPicture() {
  const picRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    const pic = picRef.current;
    if (!pic) return;

    let x = 80;
    let y = 80;
    let speedX = 4;
    let speedY = 3;
    let rotation = 0;
    let animId: number;

    function animate() {
      if (!pausedRef.current && pic) {
        x += speedX;
        y += speedY;

        const picWidth = pic.offsetWidth || 150;
        const picHeight = pic.offsetHeight || 150;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const maxX = Math.max(0, screenWidth - picWidth);
        const maxY = Math.max(0, screenHeight - picHeight);

        if (x >= maxX || x <= 0) {
          speedX *= -1;
          x = Math.max(0, Math.min(x, maxX));
        }

        if (y >= maxY || y <= 0) {
          speedY *= -1;
          y = Math.max(0, Math.min(y, maxY));
        }

        rotation += 2;

        pic.style.left = `${x}px`;
        pic.style.top = `${y}px`;
        pic.style.transform = `rotate(${rotation}deg)`;
      }

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleClick = () => {
    // Cycle to next image and toggle pause state
    setImageIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const togglePause = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused((prev) => {
      pausedRef.current = !prev;
      return !prev;
    });
  };

  if (!visible) return null;

  const currentImage = IMAGES[imageIndex];

  return (
    <div
      ref={picRef}
      id="pic"
      style={{
        position: "fixed",
        left: "100px",
        top: "100px",
        width: "150px",
        height: "150px",
        userSelect: "none",
        zIndex: 99999,
      }}
      className="group cursor-pointer select-none drop-shadow-[0_12px_28px_rgba(212,175,55,0.45)] transition-shadow hover:drop-shadow-[0_16px_36px_rgba(212,175,55,0.7)]"
      onClick={handleClick}
      title="Click image to change picture • Click ⏸/▶ to pause/resume"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-gold/80 bg-night/95 shadow-2xl backdrop-blur-md">
        <Image
          src={currentImage.src}
          alt={currentImage.title}
          fill
          sizes="150px"
          priority
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent opacity-50 pointer-events-none" />

        {/* Control Badges */}
        <div className="absolute top-1.5 right-1.5 flex items-center gap-1">
          <button
            type="button"
            onClick={togglePause}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-night/85 text-[10px] text-gold hover:bg-gold hover:text-night transition-colors"
            title={isPaused ? "Resume" : "Pause"}
          >
            {isPaused ? "▶" : "⏸"}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setVisible(false);
            }}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-night/85 text-[10px] text-white hover:bg-ruby hover:text-white transition-colors"
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Small Caption Badge */}
        <div className="absolute bottom-1 inset-x-1.5 truncate rounded bg-night/80 px-1 py-0.5 text-center text-[9px] font-semibold text-gold tracking-tight border border-gold/30">
          PrimeSPIN
        </div>
      </div>
    </div>
  );
}
