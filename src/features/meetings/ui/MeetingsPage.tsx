"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/shared/ui";
import { MeetingCard } from "@/entities/meeting";
import { fetchMyMeetings, fetchPublicMeetings, createMeeting } from "../api";
import { meetingKeys } from "../model";
import { CreateMeetingModal, type CreateMeetingFormValues } from "./CreateMeetingModal";

export function MeetingsPage() {
  const [createOpen, setCreateOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: myMeetings = [], isLoading: myLoading } = useQuery({
    queryKey: meetingKeys.my(),
    queryFn: fetchMyMeetings,
  });

  const { data: publicMeetings = [], isLoading: publicLoading } = useQuery({
    queryKey: meetingKeys.public(),
    queryFn: fetchPublicMeetings,
  });

  const createMutation = useMutation({
    mutationFn: createMeeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: meetingKeys.my() });
      setCreateOpen(false);
    },
  });

  const handleCreateSubmit = (values: CreateMeetingFormValues) => {
    createMutation.mutate(values);
  };

  const isLoading = myLoading || publicLoading;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">교환독서 모임</h1>
        <Button onClick={() => setCreateOpen(true)}>모임 만들기</Button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center gap-4 py-16">
          <div className="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
          <p className="text-gray-500 dark:text-gray-400">모임 목록을 불러오는 중...</p>
        </div>
      ) : (
        <>
          {/* 내 모임 우선 */}
          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">내 모임</h2>
            {myMeetings.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {myMeetings.map(meeting => (
                  <MeetingCard key={meeting.id} meeting={meeting} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800/50">
                <p className="text-gray-500 dark:text-gray-400">참여 중인 모임이 없습니다.</p>
                <Button variant="outline" className="mt-3" onClick={() => setCreateOpen(true)}>
                  첫 모임 만들기
                </Button>
              </div>
            )}
          </section>

          {/* 공개 모임 */}
          <section>
            <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">공개 모임</h2>
            {publicMeetings.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {publicMeetings.map(meeting => (
                  <MeetingCard key={meeting.id} meeting={meeting} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800/50">
                <p className="text-gray-500 dark:text-gray-400">공개된 모임이 없습니다.</p>
              </div>
            )}
          </section>
        </>
      )}

      <CreateMeetingModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSubmit={handleCreateSubmit}
        isPending={createMutation.isPending}
      />
    </div>
  );
}
