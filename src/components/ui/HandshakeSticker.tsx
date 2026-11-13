import Image from "next/image";

interface HandshakeStickerProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "yellow";
  className?: string;
  alt?: string;
}

export function HandshakeSticker({
  size = "md",
  variant = "light",
  className = "",
  alt = "Colaboración Chimba",
}: HandshakeStickerProps) {
  const sizeClass = size === "sm" ? "ch-sticker--sm" : size === "lg" ? "ch-sticker--lg" : "";
  const src = variant === "yellow" ? "/assets/Stickers/handshake-yellow.webp" : "/assets/Stickers/handshake-light.webp";
  const width = size === "sm" ? 64 : size === "lg" ? 220 : 120;
  const height = width;

  return (
    <span className={`ch-sticker ${sizeClass} ${className}`.trim()}>
      <Image src={src} alt={alt} width={width} height={height} unoptimized priority={size === "lg"} />
    </span>
  );
}
