"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  depth: number;
  glowScale: number;
  baseAlpha: number;
  twinkleAmplitude: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftX: number;
  driftY: number;
  speedPhase: number;
  speedVariance: number;
  tone: string;
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
    let accentGradient: CanvasGradient | null = null;
    let vignetteGradient: CanvasGradient | null = null;
    let stars: Star[] = [];
    let lastFrameTime = 0;

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const createStar = (): Star => {
      const depth = Math.random();
      const sizeRoll = Math.random();
      const isAccentStar = sizeRoll > 0.93;
      const isSlightlyLarger = !isAccentStar && sizeRoll > 0.82;
      const baseSpeed = 13 + depth * 24;
      const driftX = (Math.random() - 0.5) * (5 + depth * 7);

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: isAccentStar
          ? Math.random() * 0.12 + 0.28
          : isSlightlyLarger
            ? Math.random() * 0.11 + 0.16
            : Math.random() * 0.11 + 0.07,
        depth,
        glowScale: isAccentStar ? 1.55 : isSlightlyLarger ? 1.36 : 1.18,
        baseAlpha: isAccentStar ? 0.35 + Math.random() * 0.48 : 0.2 + Math.random() * 0.55,
        twinkleAmplitude: 0.06 + Math.random() * 0.2,
        twinkleSpeed: 0.65 + Math.random() * 1.1,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX,
        driftY: baseSpeed,
        speedPhase: Math.random() * Math.PI * 2,
        speedVariance: 0.08 + Math.random() * 0.22,
        tone:
          isAccentStar
            ? "#eef3ff"
            : Math.random() > 0.88
            ? "#dce7ff"
            : Math.random() > 0.66
              ? "#f3f7ff"
              : "#ffffff",
      };
    };

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
      gradient.addColorStop(0, "#0a0722");
      gradient.addColorStop(0.48, "#050216");
      gradient.addColorStop(1, "#030014");

      accentGradient = ctx.createRadialGradient(
        width * 0.82,
        height * 0.12,
        0,
        width * 0.82,
        height * 0.12,
        Math.max(width, height) * 0.72
      );
      accentGradient.addColorStop(0, "rgba(122, 170, 255, 0.11)");
      accentGradient.addColorStop(0.38, "rgba(98, 128, 255, 0.05)");
      accentGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      vignetteGradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.55,
        Math.max(width, height) * 0.08,
        width * 0.5,
        height * 0.55,
        Math.max(width, height) * 0.92
      );
      vignetteGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignetteGradient.addColorStop(1, "rgba(2, 1, 10, 0.36)");

      const count = clamp(Math.floor((width * height) / 3900), 320, 760);
      stars = Array.from({ length: count }, createStar);
    };

    const draw = (time: number) => {
      if (!gradient) {
        frameId = window.requestAnimationFrame(draw);
        return;
      }

      if (lastFrameTime === 0) {
        lastFrameTime = time;
      }
      const delta = Math.min((time - lastFrameTime) / 1000, 0.05);
      lastFrameTime = time;
      const smoothTime = time * 0.001;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      if (accentGradient) {
        ctx.fillStyle = accentGradient;
        ctx.fillRect(0, 0, width, height);
      }
      if (vignetteGradient) {
        ctx.fillStyle = vignetteGradient;
        ctx.fillRect(0, 0, width, height);
      }

      for (const star of stars) {
        const speedPulse =
          1 + Math.sin(smoothTime * 0.42 + star.speedPhase) * star.speedVariance;
        star.x += star.driftX * speedPulse * delta;
        star.y += star.driftY * speedPulse * delta;

        if (star.x > width + 2) {
          star.x = -2;
        } else if (star.x < -2) {
          star.x = width + 2;
        }

        if (star.y > height + 2) {
          star.y = -2;
          star.x = Math.random() * width;
        }

        const twinkleWave = Math.sin(smoothTime * star.twinkleSpeed + star.twinklePhase);
        const alpha = clamp(
          star.baseAlpha + twinkleWave * star.twinkleAmplitude,
          0.08,
          0.96
        );

        ctx.fillStyle = star.tone;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha =
          alpha * (0.05 + star.depth * 0.08 + (star.glowScale > 1.4 ? 0.03 : 0));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * star.glowScale, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    frameId = window.requestAnimationFrame(draw);
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
      className="pointer-events-none fixed inset-0 opacity-95"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
