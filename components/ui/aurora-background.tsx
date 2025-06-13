"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      container.style.setProperty("--mouse-x", x.toString());
      container.style.setProperty("--mouse-y", y.toString());
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-slate-950",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            transform: "translate(-50%, -50%)",
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96c93d)",
            filter: "blur(100px)",
            opacity: 0.15,
            mixBlendMode: "overlay",
          }}
        />
        {showRadialGradient && (
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            }}
          />
        )}
      </div>
      {children}
    </div>
  );
} 