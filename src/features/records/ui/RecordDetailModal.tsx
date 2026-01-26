"use client";

import type { ReadingRecord } from "@/entities/record";

interface RecordDetailModalProps {
  record: ReadingRecord | null;
  onClose: () => void;
}

export function RecordDetailModal({ record, onClose }: RecordDetailModalProps) {
  if (!record) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800"
        onClick={e => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{record.bookTitle}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{record.bookAuthor}</p>
          </div>
          <button onClick={onClose} className="rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 독서 정보 */}
        <div className="mb-4 flex gap-4 rounded-xl bg-gray-50 p-3 dark:bg-gray-700/50">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{record.pagesRead}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">쪽</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{record.readingTime}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">분</p>
          </div>
          {record.rating && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{record.rating}</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">별점</p>
            </div>
          )}
        </div>

        {/* 인상 깊은 구절 */}
        {record.highlight && (
          <div className="mb-4">
            <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">인상 깊은 구절</h3>
            <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <p className="text-gray-800 italic dark:text-gray-200">{record.highlight}</p>
              {record.highlightPage && (
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">p.{record.highlightPage}</p>
              )}
            </div>
          </div>
        )}

        {/* 메모 */}
        {record.memo && (
          <div className="mb-4">
            <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">메모</h3>
            <p className="text-gray-600 dark:text-gray-400">{record.memo}</p>
          </div>
        )}

        {/* 리뷰 */}
        {record.review && (
          <div>
            <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">리뷰</h3>
            <p className="text-gray-600 dark:text-gray-400">{record.review}</p>
          </div>
        )}
      </div>
    </div>
  );
}
