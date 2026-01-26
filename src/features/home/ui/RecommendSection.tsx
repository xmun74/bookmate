import { type Book, BookCard } from "@/entities/book";
import { SectionHeader } from "./SectionHeader";

interface RecommendSectionProps {
  title: string;
  description?: string;
  books: Book[];
  href?: string;
}

export function RecommendSection({ title, description, books, href }: RecommendSectionProps) {
  return (
    <section className="rounded-2xl bg-gray-50 p-4 md:p-6 dark:bg-gray-900">
      <SectionHeader title={title} href={href} />
      {description && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>}
      <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
