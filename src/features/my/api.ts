import type { UserProfile } from "@/entities/user";
import type { ReadingRecord } from "@/entities/record";
import { MOCK_USER_PROFILE } from "@/entities/user";
import { MOCK_RECORDS } from "@/entities/record";

const PAGE_SIZE = 10;
const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

const sortedRecords = [...MOCK_RECORDS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export async function fetchMyProfile(): Promise<UserProfile> {
  await delay(300);
  return { ...MOCK_USER_PROFILE };
}

export async function updateMyProfile(
  data: Partial<Pick<UserProfile, "nickname" | "bio" | "profileImageUrl">>
): Promise<UserProfile> {
  await delay(400);
  return { ...MOCK_USER_PROFILE, ...data };
}

export interface ReadingFeedPage {
  items: ReadingRecord[];
  nextCursor: number | null;
}

export async function fetchMyReadingFeed(cursor: number = 0): Promise<ReadingFeedPage> {
  await delay(350);
  const start = cursor * PAGE_SIZE;
  const items = sortedRecords.slice(start, start + PAGE_SIZE);
  const nextCursor = start + PAGE_SIZE < sortedRecords.length ? cursor + 1 : null;
  return { items, nextCursor };
}

export async function logout(): Promise<void> {
  await delay(200);
}

export async function withdraw(): Promise<void> {
  await delay(400);
}
