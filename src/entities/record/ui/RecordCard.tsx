import type { ReadingRecord } from "../model";

interface RecordCardProps {
  record: ReadingRecord;
  onClick?: () => void;
}

export function RecordCard({ record, onClick }: RecordCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
    >
      <div className="flex gap-3">
        {/* 책 커버 */}
        <div className="h-20 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex h-full items-center justify-center text-gray-400">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
        </div>

        {/* 정보 */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-medium text-gray-900 dark:text-white">{record.bookTitle}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{record.bookAuthor}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            <span>{record.pagesRead}쪽</span>
            <span>{record.readingTime}분</span>
          </div>
          {record.rating && (
            <div className="mt-1 flex items-center gap-1">
              <svg className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs text-gray-600 dark:text-gray-300">{record.rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* 하이라이트 */}
      {record.highlight && (
        <div className="mt-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <p className="text-sm text-gray-700 italic dark:text-gray-300">&quot;{record.highlight}&quot;</p>
          {record.highlightPage && <p className="mt-1 text-xs text-gray-500">p.{record.highlightPage}</p>}
        </div>
      )}
    </button>
  );
}
