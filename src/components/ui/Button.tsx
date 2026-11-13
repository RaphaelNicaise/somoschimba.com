import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "highlight" | "line" | "sticker";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  disabled,
  target,
  rel,
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "ch-btn--primary"
      : variant === "highlight"
      ? "ch-btn--highlight"
      : variant === "line"
      ? "ch-btn--line"
      : "ch-btn--sticker";

  const combinedClass = `ch-btn ${variantClass} ${className}`.trim();

  if (variant === "sticker") {
    const content = (
      <>
        <Image
          src="/assets/Stickers/handshake-light.webp"
          alt=""
          width={56}
          height={56}
          unoptimized
          aria-hidden="true"
        />
        <span>{children}</span>
      </>
    );

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className={combinedClass}>
          {content}
        </Link>
      );
    }

    return (
      <button type="button" onClick={onClick} disabled={disabled} className={combinedClass}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={combinedClass}>
      {children}
    </button>
  );
}
