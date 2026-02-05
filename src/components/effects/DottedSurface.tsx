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
 
     let animationId: number;
     let time = 0;
 
     const resize = () => {
       const dpr = window.devicePixelRatio || 1;
       const rect = canvas.getBoundingClientRect();
       canvas.width = rect.width * dpr;
       canvas.height = rect.height * dpr;
       ctx.scale(dpr, dpr);
     };
 
     const draw = () => {
       const rect = canvas.getBoundingClientRect();
       const width = rect.width;
       const height = rect.height;
 
       ctx.clearRect(0, 0, width, height);
 
       // Perspective settings
       const horizonY = height * 0.45; // Horizon line position
       const gridRows = 30;
       const gridCols = 60;
       const dotBaseSize = 1.5;
 
       // Draw dots in perspective
       for (let row = 0; row < gridRows; row++) {
         // Calculate Y position with perspective (bottom to horizon)
         const rowProgress = row / gridRows;
         const perspectiveY = horizonY + (height - horizonY) * Math.pow(rowProgress, 0.7);
         
         // Calculate scale based on distance (smaller near horizon)
         const scale = 0.1 + rowProgress * 0.9;
         const dotSize = dotBaseSize * scale;
         
         // Calculate spacing (tighter near horizon)
         const spacing = (width / gridCols) * scale;
         const startX = (width - spacing * gridCols) / 2;
         
         // Opacity fades near horizon
         const baseOpacity = 0.15 + rowProgress * 0.5;
 
         for (let col = 0; col < gridCols; col++) {
           const x = startX + col * spacing + spacing / 2;
           
           // Add subtle wave animation
           const wave = Math.sin(time * 0.001 + col * 0.1 + row * 0.15) * 2 * scale;
           const y = perspectiveY + wave;
           
           // Distance from center affects opacity
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
     draw();
 
     window.addEventListener("resize", resize);
 
     return () => {
       window.removeEventListener("resize", resize);
       cancelAnimationFrame(animationId);
     };
   }, []);
 
   return (
     <canvas
       ref={canvasRef}
       className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
       style={{ opacity: 0.8 }}
     />
   );
 }