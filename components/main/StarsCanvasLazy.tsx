"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("./StarBackground"), {
  ssr: false,
  loading: () => null,
});

export default function StarsCanvasLazy() {
  return <StarsCanvas />;
}
