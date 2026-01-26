import type { Meeting, CreateMeetingInput } from "@/entities/meeting";
import { MOCK_MY_MEETINGS, MOCK_PUBLIC_MEETINGS } from "@/entities/meeting";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchMyMeetings(): Promise<Meeting[]> {
  await delay(400);
  return [...MOCK_MY_MEETINGS];
}

export async function fetchPublicMeetings(): Promise<Meeting[]> {
  await delay(400);
  return [...MOCK_PUBLIC_MEETINGS];
}

export async function createMeeting(input: CreateMeetingInput): Promise<Meeting> {
  await delay(500);
  const newMeeting: Meeting = {
    id: `m-${Date.now()}`,
    name: input.name,
    targetBook: input.targetBook,
    startDate: input.startDate,
    endDate: input.endDate,
    progress: 0,
    isPublic: true,
    isMine: true,
  };
  return newMeeting;
}
