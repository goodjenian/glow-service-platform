import { Search, Sparkles, Zap, Smartphone, Bot, Share2 } from "lucide-react";

const floatingIcons = [
  { Icon: Search, color: "text-blue-400", position: "left-[5%] top-[20%]", delay: "0s", size: "w-8 h-8 md:w-10 md:h-10" },
  { Icon: Sparkles, color: "text-purple-400", position: "left-[8%] top-[50%]", delay: "0.5s", size: "w-6 h-6 md:w-8 md:h-8" },
  { Icon: Bot, color: "text-emerald-400", position: "left-[3%] top-[75%]", delay: "1s", size: "w-7 h-7 md:w-9 md:h-9" },
  { Icon: Zap, color: "text-amber-300", position: "right-[5%] top-[25%]", delay: "0.3s", size: "w-7 h-7 md:w-9 md:h-9" },
  { Icon: Smartphone, color: "text-teal-400", position: "right-[8%] top-[55%]", delay: "0.8s", size: "w-6 h-6 md:w-8 md:h-8" },
  { Icon: Share2, color: "text-rose-400", position: "right-[3%] top-[80%]", delay: "1.2s", size: "w-8 h-8 md:w-10 md:h-10" },
];

export function HeroFloatingIcons() {
  return (
    <>
      {floatingIcons.map(({ Icon, color, position, delay, size }, index) => (
        <div
          key={index}
          className={`absolute ${position} hidden lg:flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-300`}
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <div className="relative">
            <div className={`absolute inset-0 ${color} blur-xl opacity-40`} />
            <Icon className={`${size} ${color} relative z-10`} />
          </div>
        </div>
      ))}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(3deg);
          }
          50% {
            transform: translateY(-5px) rotate(-2deg);
          }
          75% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
      `}</style>
    </>
  );
}
