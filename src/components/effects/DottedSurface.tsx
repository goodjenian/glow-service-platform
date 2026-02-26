 import { useEffect, useRef } from "react";
 
 interface DottedSurfaceProps {
   className?: string;
 }
 
 export function DottedSurface({ className = "" }: DottedSurfaceProps) {
   const canvasRef = useRef<HTMLCanvasElement>(null);
 
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

    let animationId: number | null = null;
    let time = 0;
    let isVisible = false;
    let cachedWidth = 0;
    let cachedHeight = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      cachedWidth = rect.width;
      cachedHeight = rect.height;
      canvas.width = cachedWidth * dpr;
      canvas.height = cachedHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      if (!isVisible) { animationId = null; return; }
      const width = cachedWidth;
      const height = cachedHeight;

        ctx.clearRect(0, 0, width, height);

        const horizonY = height * 0.45;
        const gridRows = 20; // reduced from 30
        const gridCols = 40; // reduced from 60
        const dotBaseSize = 1.5;

        for (let row = 0; row < gridRows; row++) {
          const rowProgress = row / gridRows;
          const perspectiveY = horizonY + (height - horizonY) * Math.pow(rowProgress, 0.7);
          const scale = 0.1 + rowProgress * 0.9;
          const dotSize = dotBaseSize * scale;
          const spacing = (width / gridCols) * scale;
          const startX = (width - spacing * gridCols) / 2;
          const baseOpacity = 0.15 + rowProgress * 0.5;

          for (let col = 0; col < gridCols; col++) {
            const x = startX + col * spacing + spacing / 2;
            const wave = Math.sin(time * 0.001 + col * 0.1 + row * 0.15) * 2 * scale;
            const y = perspectiveY + wave;
            const centerDist = Math.abs(col - gridCols / 2) / (gridCols / 2);
            const opacity = baseOpacity * (1 - centerDist * 0.3);

            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fill();
          }
        }

        time += 16;
        animationId = requestAnimationFrame(draw);
      };

      resize();

      const observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationId) draw();
      }, { threshold: 0 });
      observer.observe(canvas);

      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
        if (animationId) cancelAnimationFrame(animationId);
        observer.disconnect();
      };
    }, []);
 
   return (
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full pointer-events-none hidden md:block ${className}`}
        style={{ opacity: 0.8 }}
      />
   );
 }