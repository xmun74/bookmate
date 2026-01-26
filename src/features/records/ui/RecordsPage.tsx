"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { type ReadingRecord, MOCK_RECORDS, MOCK_WEEKLY_DATA, MOCK_GENRE_DATA, RecordCard } from "@/entities/record";
import { Calendar } from "./Calendar";
import { RecordDetailModal } from "./RecordDetailModal";

const WeeklyChart = dynamic(() => import("./WeeklyChart").then(mod => ({ default: mod.WeeklyChart })), {
  ssr: false,
  loading: () => (
    <div className="flex h-72 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-gray-800">
      <div className="text-gray-400">로딩 중...</div>
    </div>
  ),
});

const GenreChart = dynamic(() => import("./GenreChart").then(mod => ({ default: mod.GenreChart })), {
  ssr: false,
  loading: () => (
    <div className="flex h-72 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-gray-800">
      <div className="text-gray-400">로딩 중...</div>
    </div>
  ),
});

export function RecordsPage() {
  const [selectedRecord, setSelectedRecord] = useState<ReadingRecord | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [dateRecords, setDateRecords] = useState<ReadingRecord[]>([]);

  const handleDateSelect = (date: string, records: ReadingRecord[]) => {
    setSelectedDate(date);
    setDateRecords(records);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
      {/* 캘린더 - 전체 너비 */}
      <Calendar records={MOCK_RECORDS} selectedDate={selectedDate} onDateSelect={handleDateSelect} />

      {/* 선택된 날짜의 기록 */}
      {selectedDate && (
        <div className="mt-6">
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
            {selectedDate.replace(/-/g, ".")} 기록
          </h2>
          {dateRecords.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {dateRecords.map(record => (
                <RecordCard key={record.id} record={record} onClick={() => setSelectedRecord(record)} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-gray-50 p-6 text-center dark:bg-gray-800">
              <svg
                className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <p className="mt-2 text-gray-500 dark:text-gray-400">이 날의 독서 기록이 없습니다.</p>
            </div>
          )}
        </div>
      )}

      {/* 통계 차트 */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <WeeklyChart data={MOCK_WEEKLY_DATA} />
        <GenreChart data={MOCK_GENRE_DATA} />
      </div>

      {/* 최근 기록 */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">최근 독서 기록</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_RECORDS.slice(0, 6).map(record => (
            <RecordCard key={record.id} record={record} onClick={() => setSelectedRecord(record)} />
          ))}
        </div>
      </div>

      {/* 상세 모달 */}
      <RecordDetailModal record={selectedRecord} onClose={() => setSelectedRecord(null)} />
    </div>
  );
}
