"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  twinkle: number;
  drift: number;
};

export default function StarsCanvasLazy() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];

    const createStar = (): Star => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.2,
      alpha: Math.random() * 0.7 + 0.15,
      twinkle: (Math.random() * 0.012 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
      drift: Math.random() * 0.08 + 0.02,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(140, Math.floor((width * height) / 9000));
      stars = Array.from({ length: count }, createStar);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";

      for (const star of stars) {
        star.alpha += star.twinkle;
        if (star.alpha > 0.95 || star.alpha < 0.12) {
          star.twinkle *= -1;
        }

        star.y += star.drift;
        if (star.y > height + 2) {
          star.y = -2;
          star.x = Math.random() * width;
        }

        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[20]"
    />
  );
}
