"use client";

import { cn } from "@/shared/libs";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

export function ProgressBar({ value, max = 100, className }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, max > 0 ? (value / max) * 100 : 0));

  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700", className)}>
      <div
        className="bg-primary h-full rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
}
