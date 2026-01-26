export interface UserProfile {
  id: string;
  nickname: string;
  bio: string;
  profileImageUrl: string | null;
}

export const MOCK_USER_PROFILE: UserProfile = {
  id: "u1",
  nickname: "독서광",
  bio: "한 달에 한 권씩 읽어나가는 중입니다.",
  profileImageUrl: "https://picsum.photos/seed/avatar1/200/200",
};
