import Link from "next/link";
import type { Book } from "../model";

interface BookCardProps {
  book: Book;
  rank?: number;
}

export function BookCard({ book, rank }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`} className="group block">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        {rank && (
          <div className="absolute top-2 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/80 text-xs font-bold text-white dark:bg-white/90 dark:text-black">
            {rank}
          </div>
        )}
        <div className="flex h-full items-center justify-center text-gray-400 dark:text-gray-500">
          <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
          {book.title}
        </h3>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{book.author}</p>
        {book.rating && (
          <div className="mt-1 flex items-center gap-1">
            <svg className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-gray-500 dark:text-gray-400">{book.rating}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
