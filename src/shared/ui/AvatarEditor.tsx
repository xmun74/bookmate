"use client";

import { useRef } from "react";
import { cn } from "@/shared/libs";

interface AvatarEditorProps {
  src: string | null;
  alt: string;
  onImageChange?: (file: File) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-32 w-32",
};

export function AvatarEditor({ src, alt, onImageChange, size = "md", className }: AvatarEditorProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => onImageChange && inputRef.current?.click();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) onImageChange?.(file);
    e.target.value = "";
  };

  return (
    <div className={cn("relative shrink-0", className)}>
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "relative overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-700",
          sizeClasses[size],
          onImageChange && "cursor-pointer hover:opacity-90"
        )}
        disabled={!onImageChange}
        aria-label="프로필 사진 변경"
      >
        {src ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-2xl font-medium text-gray-400 dark:text-gray-500">
            {alt[0]?.toUpperCase() || "?"}
          </span>
        )}
        {onImageChange && (
          <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity hover:opacity-100">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
            </svg>
          </span>
        )}
      </button>
      <input ref={inputRef} type="file" accept="image/*" className="sr-only" onChange={handleChange} aria-hidden />
    </div>
  );
}
