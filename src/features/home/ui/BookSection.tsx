import { type Book, BookCard } from "@/entities/book";
import { SectionHeader } from "./SectionHeader";

interface BookSectionProps {
  title: string;
  books: Book[];
  href?: string;
  showRank?: boolean;
}

export function BookSection({ title, books, href, showRank = false }: BookSectionProps) {
  return (
    <section>
      <SectionHeader title={title} href={href} />
      <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {books.map((book, index) => (
          <BookCard key={book.id} book={book} rank={showRank ? index + 1 : undefined} />
        ))}
      </div>
    </section>
  );
}
