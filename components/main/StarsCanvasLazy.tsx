"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  twinkle: number;
  driftX: number;
  driftY: number;
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
    let gradient: CanvasGradient | null = null;
    let stars: Star[] = [];

    const createStar = (): Star => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.2,
      alpha: Math.random() * 0.65 + 0.2,
      twinkle: (Math.random() * 0.02 + 0.006) * (Math.random() > 0.5 ? 1 : -1),
      driftX: (Math.random() - 0.5) * 0.1,
      driftY: Math.random() * 0.26 + 0.08,
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

      gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height)
      );
      gradient.addColorStop(0, "#09051d");
      gradient.addColorStop(0.55, "#050214");
      gradient.addColorStop(1, "#030014");

      const count = Math.max(140, Math.floor((width * height) / 9000));
      stars = Array.from({ length: count }, createStar);
    };

    const draw = () => {
      if (!gradient) {
        frameId = window.requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";

      for (const star of stars) {
        star.alpha += star.twinkle;
        if (star.alpha > 0.95 || star.alpha < 0.12) {
          star.twinkle *= -1;
        }

        star.x += star.driftX;
        star.y += star.driftY;

        if (star.x > width + 2) {
          star.x = -2;
        } else if (star.x < -2) {
          star.x = width + 2;
        }

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
      className="pointer-events-none fixed inset-0"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
