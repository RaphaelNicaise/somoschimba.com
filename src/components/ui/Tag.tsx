import React from "react";

interface TagProps {
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}

export function Tag({ children, size = "md", className = "" }: TagProps) {
  const sizeClass = size === "lg" ? "ch-tag--lg" : "";
  return <span className={`ch-tag ${sizeClass} ${className}`.trim()}>{children}</span>;
}
