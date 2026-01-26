export type TabType = "bestseller" | "trending" | "new";

export const TABS: { id: TabType; label: string }[] = [
  { id: "bestseller", label: "베스트셀러" },
  { id: "trending", label: "화제의 책" },
  { id: "new", label: "신간" },
];
