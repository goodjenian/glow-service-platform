import logoWhite from "@/assets/logo.png";

interface LogoWatermarkProps {
  className?: string;
}

export function LogoWatermark({ className = "" }: LogoWatermarkProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {/* Large centered watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015]">
        <img
          src={logoWhite}
          alt=""
          className="w-[600px] h-[600px] object-contain"
          aria-hidden="true"
        />
      </div>
      {/* Bottom right smaller watermark */}
      <div className="absolute bottom-20 right-20 opacity-[0.02]">
        <img
          src={logoWhite}
          alt=""
          className="w-[200px] h-[200px] object-contain"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
