import { useEffect, useMemo } from "react";

// Confetti Component
const colors = [
  "#8a0c1a", // deep red
  "#b11226", // crimson
  "#d11a2a", // red
  "#e63946", // bright red
  "#ff5a6e", // pink-red
  "#ff7b8b", // blush red
];

type ConfettiPiece = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
  opacity: number;
  color: string;
};

export function Confetti({
  active,
  seconds = 8,
  pieces = 120,
}: {
  active: boolean;
  seconds?: number;
  pieces?: number;
}) {
  const confetti = useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: pieces }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 1.8,
      duration: 6.5 + Math.random() * 3.5,
      size: 7 + Math.random() * 11,
      rotate: Math.random() * 360,
      opacity: 0.8 + Math.random() * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [pieces]);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {}, seconds * 1000);
    return () => clearTimeout(t);
  }, [active, seconds]);

  if (!active) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(-40vh) rotate(0deg);
            opacity: 0;
          }
          18% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(160vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
      {confetti.map((c, i) => (
        <div
          key={i}
          className="absolute top-[-20vh]"
          style={{
            left: `${c.left}%`,
            width: `${c.size}px`,
            height: `${Math.max(8, c.size * 1.6)}px`,
            opacity: c.opacity,
            background: c.color,
            borderRadius: "2px",
            transform: `rotate(${c.rotate}deg)`,
            animation: `confettiFall ${c.duration}s linear ${c.delay}s both`,
          }}
        />
      ))}
    </div>
  );
}
