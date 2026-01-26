"use client";

import type { Meeting } from "../model";
import { ProgressBar } from "@/shared/ui";
import { cn, getDDay } from "@/shared/libs";

interface MeetingCardProps {
  meeting: Meeting;
}

function formatDDay(days: number): string {
  if (days > 0) return `D-${days}`;
  if (days === 0) return "D-Day";
  return "종료";
}

export function MeetingCard({ meeting }: MeetingCardProps) {
  const dDay = getDDay(meeting.endDate);

  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{meeting.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">목표 도서: {meeting.targetBook}</p>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",
            dDay > 0 && "bg-primary/10 text-primary dark:bg-primary/20",
            dDay === 0 && "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
            dDay < 0 && "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
          )}
        >
          {formatDDay(dDay)}
        </span>
      </div>
      <ProgressBar value={meeting.progress} max={100} className="mt-2" />
      <p className="mt-1 text-right text-xs text-gray-500 dark:text-gray-400">진행률 {meeting.progress}%</p>
    </article>
  );
}
