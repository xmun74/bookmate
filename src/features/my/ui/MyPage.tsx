"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Modal, AvatarEditor, EditableText } from "@/shared/ui";
import { fetchMyProfile, updateMyProfile, logout, withdraw } from "../api";
import { myKeys } from "../model";
import { ReadingFeedStack } from "./ReadingFeedStack";

export function MyPage() {
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: myKeys.profile(),
    queryFn: fetchMyProfile,
  });

  const updateProfileMutation = useMutation({
    mutationFn: updateMyProfile,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: myKeys.profile() }),
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {},
  });

  const withdrawMutation = useMutation({
    mutationFn: withdraw,
    onSuccess: () => {
      setWithdrawModalOpen(false);
    },
  });

  const handleSaveNickname = (nickname: string) => {
    updateProfileMutation.mutate({ nickname });
  };

  const handleSaveBio = (bio: string) => {
    updateProfileMutation.mutate({ bio });
  };

  const handleImageChange = (file: File) => {
    const url = URL.createObjectURL(file);
    updateProfileMutation.mutate({ profileImageUrl: url });
  };

  if (profileLoading || !profile) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 md:px-6 md:py-8">
      {/* 프로필 편집 */}
      <section className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        <AvatarEditor
          src={profile.profileImageUrl}
          alt={profile.nickname}
          onImageChange={handleImageChange}
          size="lg"
        />
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <EditableText
            value={profile.nickname}
            onSave={handleSaveNickname}
            placeholder="닉네임"
            as="h2"
            className="text-xl font-bold text-gray-900 dark:text-white"
          />
          <EditableText
            value={profile.bio}
            onSave={handleSaveBio}
            placeholder="한 줄 소개를 입력하세요"
            as="p"
            multiline
            className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          />
        </div>
      </section>

      {/* 최근 독서 - 위로 쌓이는 피드 */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">최근 읽은 책</h2>
        <ReadingFeedStack />
      </section>

      {/* 로그아웃 / 회원 탈퇴 */}
      <section className="space-y-3 border-t border-gray-100 pt-6 dark:border-gray-800">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => logoutMutation.mutate()}
          disabled={logoutMutation.isPending}
        >
          로그아웃
        </Button>
        <Button
          variant="destructive"
          className="w-full"
          onClick={() => setWithdrawModalOpen(true)}
          disabled={withdrawMutation.isPending}
        >
          회원 탈퇴
        </Button>
      </section>

      {/* 회원 탈퇴 확인 모달 */}
      <Modal open={withdrawModalOpen} onClose={() => setWithdrawModalOpen(false)} title="회원 탈퇴">
        <div className="space-y-4 p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            탈퇴하면 모든 데이터가 삭제되며 복구할 수 없습니다. 정말 탈퇴하시겠어요?
          </p>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setWithdrawModalOpen(false)}>
              취소
            </Button>
            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => withdrawMutation.mutate()}
              disabled={withdrawMutation.isPending}
            >
              {withdrawMutation.isPending ? "처리 중..." : "탈퇴하기"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
