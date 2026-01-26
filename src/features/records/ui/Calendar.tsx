"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import type { ReadingRecord } from "@/entities/record";
import { cn } from "@/shared/libs/utils";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

function getCalendarCells(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells: { day: number; isCurrentMonth: boolean; dateStr: string }[] = [];

  // 이전 달 날짜
  for (let i = 0; i < firstDay; i++) {
    const day = prevMonthDays - firstDay + 1 + i;
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    cells.push({
      day,
      isCurrentMonth: false,
      dateStr: `${prevYear}-${String(prevMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    });
  }

  // 이번 달
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({
      day: d,
      isCurrentMonth: true,
      dateStr: `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
    });
  }

  // 다음 달 날짜 (6주 채우기)
  const totalCells = 42;
  const remaining = totalCells - cells.length;
  for (let d = 1; d <= remaining; d++) {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    cells.push({
      day: d,
      isCurrentMonth: false,
      dateStr: `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
    });
  }

  return cells;
}

function getRecordsByDate(records: ReadingRecord[]) {
  const map = new Map<string, ReadingRecord[]>();
  for (const r of records) {
    const list = map.get(r.date) ?? [];
    list.push(r);
    map.set(r.date, list);
  }
  return map;
}

export interface CalendarProps {
  records: ReadingRecord[];
  selectedDate?: string | null;
  onDateSelect?: (date: string, records: ReadingRecord[]) => void;
}

export function Calendar({ records, selectedDate, onDateSelect }: CalendarProps) {
  const [viewDate, setViewDate] = useState(() => new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const cells = useMemo(() => getCalendarCells(year, month), [year, month]);
  const recordsByDate = useMemo(() => getRecordsByDate(records), [records]);

  const todayStr = useMemo(() => {
    const t = new Date();
    return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  }, []);

  const goPrevMonth = () => setViewDate(new Date(year, month - 1));
  const goNextMonth = () => setViewDate(new Date(year, month + 1));
  const goToday = () => {
    onDateSelect?.(todayStr, []);
    setViewDate(new Date());
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-black">
      {/* 헤더: 년월 + 네비게이션 */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 md:px-6 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 md:text-xl dark:text-white">
          {year}년 {month + 1}월
        </h2>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={goPrevMonth}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="이전 달"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goToday}
            className="flex h-9 w-12 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="이전 달"
          >
            오늘
          </button>

          <button
            type="button"
            onClick={goNextMonth}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-label="다음 달"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 border-b border-gray-100 dark:border-gray-700">
        {WEEKDAYS.map((w, i) => (
          <div
            key={w}
            className={cn(
              "py-2 text-center text-xs font-medium md:py-3 md:text-sm",
              i === 0 && "text-red-500 dark:text-red-400",
              i === 6 && "text-blue-500 dark:text-blue-400",
              i !== 0 && i !== 6 && "text-gray-500 dark:text-gray-400"
            )}
          >
            {w}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 */}
      <div className="grid grid-cols-7">
        {cells.map((cell, index) => {
          const dayRecords = recordsByDate.get(cell.dateStr) ?? [];
          const isToday = cell.dateStr === todayStr;
          const isSelected = selectedDate != null && cell.dateStr === selectedDate;
          const hasRecords = dayRecords.length > 0;

          return (
            <button
              key={`${cell.dateStr}-${index}`}
              type="button"
              onClick={() => onDateSelect?.(cell.dateStr, dayRecords)}
              className={cn(
                "relative flex flex-col gap-0.5 border-r border-b border-gray-50 p-2 transition-colors md:h-[200px] dark:border-gray-700/50",
                !cell.isCurrentMonth && "text-gray-300 dark:text-gray-600",
                cell.isCurrentMonth && "text-gray-900 dark:text-gray-100",
                cell.isCurrentMonth && "hover:bg-gray-50 dark:hover:bg-gray-700/50",
                isSelected && "bg-primary/10 dark:bg-primary/25",
                index % 7 === 6 && "border-r-0"
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full text-xs",
                  isToday && "bg-primary text-primary-foreground",
                  isSelected &&
                    !isToday &&
                    "ring-primary bg-white ring-[0.5px] ring-offset-2 dark:bg-black dark:ring-offset-gray-800"
                )}
              >
                {cell.day}
              </span>
              {hasRecords && cell.isCurrentMonth && (
                <span className="mt-1 flex h-full w-full items-end justify-center">
                  <span className="flex justify-center">
                    {dayRecords.slice(0, 4).map((record, i) => (
                      <span
                        key={record.id}
                        className={cn(
                          "aspect-3/4 h-[130px] w-20 overflow-hidden rounded-[2px] bg-gray-200 shadow-md dark:bg-gray-700",
                          i > 0 && "-ml-6 border-2 border-white dark:border-gray-800"
                        )}
                        style={{ zIndex: i }}
                        title={record.bookTitle}
                      >
                        {record.bookCover ? (
                          <Image
                            src={record.bookCover}
                            alt={record.bookTitle}
                            width={80}
                            height={104}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="flex h-full w-full items-center justify-center text-[10px] font-medium text-gray-500 md:text-xs dark:text-gray-400">
                            {record.bookTitle[0]}
                          </span>
                        )}
                      </span>
                    ))}
                    {dayRecords.length > 4 && (
                      <span
                        className="-ml-6 flex h-[130px] w-20 items-center justify-center rounded-[2px] border-2 border-white bg-gray-200 text-xs font-medium text-gray-500 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-400"
                        style={{ zIndex: 4 }}
                      >
                        +{dayRecords.length - 4}
                      </span>
                    )}
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
