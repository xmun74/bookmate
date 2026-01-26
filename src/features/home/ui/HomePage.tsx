"use client";

import { useState } from "react";
import { MOCK_BOOKS } from "@/entities/book";
import type { TabType } from "../model";
import { TabNavigation } from "./TabNavigation";
import { GenreChips } from "./GenreChips";
import { BookSection } from "./BookSection";
import { RecommendSection } from "./RecommendSection";

export function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>("bestseller");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filteredBooks = selectedGenre ? MOCK_BOOKS.filter(book => book.genre === selectedGenre) : MOCK_BOOKS;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
      <div className="space-y-8">
        {/* 탭 네비게이션 */}
        <section>
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </section>

        {/* 큐레이션 책 목록 */}
        <BookSection
          title={activeTab === "bestseller" ? "베스트셀러" : activeTab === "trending" ? "화제의 책" : "신간 도서"}
          books={filteredBooks}
          href="/books"
          showRank={activeTab === "bestseller"}
        />

        {/* 장르별 추천 */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">장르별 추천</h2>
          <GenreChips selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {filteredBooks.map(book => (
              <div key={book.id}>
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
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
                  <p className="line-clamp-2 text-sm font-medium text-gray-900 dark:text-white">{book.title}</p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 맞춤 추천 섹션 */}
        <RecommendSection
          title="당신을 위한 추천"
          description="독서 취향을 분석하여 맞춤 도서를 추천해 드려요"
          books={MOCK_BOOKS.slice(0, 6)}
          href="/recommendations"
        />

        {/* 친구들이 읽는 책 */}
        <BookSection title="친구들이 읽는 책" books={MOCK_BOOKS.slice(0, 6)} href="/feed" />
      </div>
    </div>
  );
}
