"use client";

import { cn } from "@/shared/libs";
import { GENRES } from "@/entities/book";

interface GenreChipsProps {
  selectedGenre: string | null;
  onGenreChange: (genre: string | null) => void;
}

export function GenreChips({ selectedGenre, onGenreChange }: GenreChipsProps) {
  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">
      <button
        onClick={() => onGenreChange(null)}
        className={cn(
          "shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
          selectedGenre === null
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        )}
      >
        전체
      </button>
      {GENRES.map(genre => (
        <button
          key={genre}
          onClick={() => onGenreChange(genre)}
          className={cn(
            "shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
            selectedGenre === genre
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          )}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
