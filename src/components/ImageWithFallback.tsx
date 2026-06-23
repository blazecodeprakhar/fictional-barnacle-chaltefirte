"use client";

import React, { useState } from "react";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function ImageWithFallback({ src, alt, className, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#0c0d12] via-[#1a1c26] to-[#0e1017] border border-border/80 overflow-hidden ${className}`}>
        {/* Animated Mountain Silhouette SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-12 h-12 text-primary/45 animate-pulse"
        >
          <path d="M17 18.5 21 22H3l8-10 4 5z" />
          <path d="m11 11 3-3.75L21 16H9z" />
          <circle cx="18" cy="7" r="1.5" fill="currentColor" className="text-primary/30" />
        </svg>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
