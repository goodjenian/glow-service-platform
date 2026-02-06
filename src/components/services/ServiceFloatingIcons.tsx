import { LucideIcon } from "lucide-react";

interface ServiceFloatingIconsProps {
  icon: LucideIcon;
  accentColor: string;
}

export function ServiceFloatingIcons({ icon: Icon, accentColor }: ServiceFloatingIconsProps) {
  const iconPositions = [
    { top: "15%", left: "5%", size: "w-8 h-8", delay: "0s", opacity: "opacity-20" },
    { top: "25%", right: "8%", size: "w-10 h-10", delay: "0.5s", opacity: "opacity-15" },
    { top: "60%", left: "3%", size: "w-6 h-6", delay: "1s", opacity: "opacity-25" },
    { top: "70%", right: "5%", size: "w-8 h-8", delay: "1.5s", opacity: "opacity-20" },
    { top: "40%", left: "8%", size: "w-5 h-5", delay: "2s", opacity: "opacity-30" },
    { top: "45%", right: "10%", size: "w-7 h-7", delay: "2.5s", opacity: "opacity-15" },
  ];

  return (
    <>
      {iconPositions.map((pos, index) => (
        <div
          key={index}
          className={`absolute ${pos.opacity} animate-float pointer-events-none hidden lg:block`}
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            animationDelay: pos.delay,
          }}
        >
          <Icon className={`${pos.size} ${accentColor}`} />
        </div>
      ))}
    </>
  );
}
