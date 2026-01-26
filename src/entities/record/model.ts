export interface ReadingRecord {
  id: string;
  bookId: string;
  bookTitle: string;
  bookAuthor: string;
  bookCover?: string;
  date: string;
  pagesRead: number;
  readingTime: number; // 분 단위
  memo?: string;
  highlight?: string;
  highlightPage?: number;
  rating?: number;
  review?: string;
  genre: string;
}

export interface WeeklyReadingData {
  day: string;
  pages: number;
  time: number;
}

export interface GenreData {
  name: string;
  value: number;
  color: string;
}

// 목업 데이터
export const MOCK_RECORDS: ReadingRecord[] = [
  {
    id: "1",
    bookId: "1",
    bookTitle: "불편한 편의점",
    bookAuthor: "김호연",
    bookCover: "https://picsum.photos/seed/book1/200/280",
    date: "2026-01-20",
    pagesRead: 45,
    readingTime: 60,
    memo: "독고 씨의 따뜻한 마음이 느껴지는 장면",
    highlight: "사람은 누구나 자신만의 사연을 안고 살아간다.",
    highlightPage: 127,
    genre: "소설",
  },
  {
    id: "12",
    bookId: "12",
    bookTitle: "불편한 편의점2",
    bookAuthor: "김호연",
    bookCover: "https://picsum.photos/seed/book12/200/280",
    date: "2026-01-20",
    pagesRead: 45,
    readingTime: 60,
    memo: "독고 씨의 따뜻한 마음이 느껴지는 장면",
    highlight: "사람은 누구나 자신만의 사연을 안고 살아간다.",
    highlightPage: 127,
    genre: "소설",
  },
  {
    id: "2",
    bookId: "2",
    bookTitle: "역행자",
    bookAuthor: "자청",
    bookCover: "https://picsum.photos/seed/book2/200/280",
    date: "2026-01-21",
    pagesRead: 30,
    readingTime: 45,
    highlight: "운이 좋은 사람은 운이 좋아지는 행동을 한다.",
    highlightPage: 89,
    genre: "자기계발",
  },
  {
    id: "3",
    bookId: "1",
    bookTitle: "불편한 편의점",
    bookAuthor: "김호연",
    bookCover: "https://picsum.photos/seed/book1/200/280",
    date: "2026-01-22",
    pagesRead: 50,
    readingTime: 70,
    rating: 4.5,
    review: "따뜻한 이야기, 다 읽고 나니 마음이 편안해졌다.",
    genre: "소설",
  },
  {
    id: "4",
    bookId: "3",
    bookTitle: "트렌드 코리아 2026",
    bookAuthor: "김난도",
    bookCover: "https://picsum.photos/seed/book3/200/280",
    date: "2026-01-23",
    pagesRead: 40,
    readingTime: 50,
    genre: "경제/경영",
  },
  {
    id: "5",
    bookId: "4",
    bookTitle: "물고기는 존재하지 않는다",
    bookAuthor: "룰루 밀러",
    bookCover: "https://picsum.photos/seed/book4/200/280",
    date: "2026-01-25",
    pagesRead: 35,
    readingTime: 55,
    highlight: "혼돈을 사랑하라. 그것이 당신을 자유롭게 할 것이다.",
    highlightPage: 203,
    genre: "과학",
  },
];

export const MOCK_WEEKLY_DATA: WeeklyReadingData[] = [
  { day: "월", pages: 45, time: 60 },
  { day: "화", pages: 30, time: 45 },
  { day: "수", pages: 50, time: 70 },
  { day: "목", pages: 40, time: 50 },
  { day: "금", pages: 0, time: 0 },
  { day: "토", pages: 35, time: 55 },
  { day: "일", pages: 0, time: 0 },
];

export const MOCK_GENRE_DATA: GenreData[] = [
  { name: "소설", value: 45, color: "#3b82f6" },
  { name: "자기계발", value: 25, color: "#10b981" },
  { name: "경제/경영", value: 15, color: "#f59e0b" },
  { name: "과학", value: 15, color: "#8b5cf6" },
];
