export interface Meeting {
  id: string;
  name: string;
  targetBook: string;
  startDate: string;
  endDate: string;
  progress: number; // 0–100
  isPublic: boolean;
  isMine: boolean;
}

export interface CreateMeetingInput {
  name: string;
  targetBook: string;
  startDate: string;
  endDate: string;
}

const MY_MEETINGS: Meeting[] = [
  {
    id: "m1",
    name: "역행자 함께 읽기",
    targetBook: "역행자",
    startDate: "2026-01-01",
    endDate: "2026-01-31",
    progress: 65,
    isPublic: true,
    isMine: true,
  },
  {
    id: "m2",
    name: "불편한 편의점 모임",
    targetBook: "불편한 편의점",
    startDate: "2026-01-15",
    endDate: "2026-02-15",
    progress: 20,
    isPublic: false,
    isMine: true,
  },
];

const PUBLIC_MEETINGS: Meeting[] = [
  {
    id: "m3",
    name: "트렌드 코리아 2026 챌린지",
    targetBook: "트렌드 코리아 2026",
    startDate: "2026-01-10",
    endDate: "2026-02-10",
    progress: 40,
    isPublic: true,
    isMine: false,
  },
];

export const MOCK_MY_MEETINGS = MY_MEETINGS;
export const MOCK_PUBLIC_MEETINGS = PUBLIC_MEETINGS;
