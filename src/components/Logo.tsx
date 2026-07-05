type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  text?: string;
};

const sizes = {
  sm: { box: "h-8 w-8", text: "text-lg", letter: "text-sm" },
  md: { box: "h-9 w-9", text: "text-lg", letter: "text-base" },
  lg: { box: "h-12 w-12", text: "text-xl", letter: "text-xl" },
};

export function Logo({ size = "md", showText = true, text = "VevadeCo" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${s.box} relative flex items-center justify-center overflow-hidden rounded-xl shadow-sm`}
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #06b6d4 100%)",
        }}
      >
        <span
          className={`${s.letter} font-black leading-none text-white drop-shadow-sm`}
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          V
        </span>
      </div>
      {showText && (
        <span className={`${s.text} font-bold tracking-tight`}>{text}</span>
      )}
    </div>
  );
}
