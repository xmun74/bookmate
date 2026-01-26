"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import type { ReadingRecord } from "@/entities/record";
import { fetchMyReadingFeed } from "../api";
import { myKeys } from "../model";

const STACK_OFFSET = 12;

function FeedItem({ record, index }: { record: ReadingRecord; index: number }) {
  return (
    <li
      className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800"
      style={{ marginTop: index === 0 ? 0 : -STACK_OFFSET }}
    >
      <div className="h-14 w-10 shrink-0 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
        {record.bookCover ? (
          <img src={record.bookCover} alt={record.bookTitle} className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-xs text-gray-400">
            {record.bookTitle[0]}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-gray-900 dark:text-white">{record.bookTitle}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {record.date.replace(/-/g, ".")} · {record.pagesRead}쪽
        </p>
      </div>
    </li>
  );
}

export function ReadingFeedStack() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: myKeys.readingFeed(),
    queryFn: ({ pageParam }) => fetchMyReadingFeed(pageParam),
    initialPageParam: 0,
    getNextPageParam: last => last.nextCursor,
  });

  const items = data?.pages.flatMap(p => p.items) ?? [];

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-12 text-center dark:border-gray-700 dark:bg-gray-800/50">
        <p className="text-gray-500 dark:text-gray-400">아직 읽은 책이 없어요</p>
      </div>
    );
  }

  return (
    <div className="pb-4">
      <ul className="relative flex flex-col">
        {items.map((record, idx) => (
          <FeedItem key={record.id} record={record} index={idx} />
        ))}
      </ul>
      {hasNextPage && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {isFetchingNextPage ? "불러오는 중..." : "더 보기"}
          </button>
        </div>
      )}
    </div>
  );
}
