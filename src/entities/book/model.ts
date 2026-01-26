export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating?: number;
  genre?: string;
}

export const GENRES = ["소설", "자기계발", "에세이", "경제/경영", "인문학", "과학"] as const;

export type Genre = (typeof GENRES)[number];

// 목업 데이터
export const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    title: "불편한 편의점",
    author: "김호연",
    coverImage: "/images/books/placeholder.jpg",
    rating: 4.5,
    genre: "소설",
  },
  {
    id: "2",
    title: "역행자",
    author: "자청",
    coverImage: "/images/books/placeholder.jpg",
    rating: 4.3,
    genre: "자기계발",
  },
  {
    id: "3",
    title: "아버지의 해방일지",
    author: "정지아",
    coverImage: "/images/books/placeholder.jpg",
    rating: 4.6,
    genre: "소설",
  },
  {
    id: "4",
    title: "트렌드 코리아 2026",
    author: "김난도",
    coverImage: "/images/books/placeholder.jpg",
    rating: 4.2,
    genre: "경제/경영",
  },
  {
    id: "5",
    title: "물고기는 존재하지 않는다",
    author: "룰루 밀러",
    coverImage: "/images/books/placeholder.jpg",
    rating: 4.7,
    genre: "과학",
  },
  {
    id: "6",
    title: "하얼빈",
    author: "김훈",
    coverImage: "/images/books/placeholder.jpg",
    rating: 4.4,
    genre: "소설",
  },
];
