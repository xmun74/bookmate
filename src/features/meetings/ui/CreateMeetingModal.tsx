"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Modal, Button } from "@/shared/ui";

const createMeetingSchema = z.object({
  name: z.string().min(1, "모임명을 입력하세요"),
  targetBook: z.string().min(1, "목표 도서를 입력하세요"),
  startDate: z.string().min(1, "시작일을 선택하세요"),
  endDate: z.string().min(1, "종료일을 선택하세요"),
});

export type CreateMeetingFormValues = z.infer<typeof createMeetingSchema>;

interface CreateMeetingModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: CreateMeetingFormValues) => void;
  isPending?: boolean;
}

export function CreateMeetingModal({ open, onClose, onSubmit, isPending }: CreateMeetingModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateMeetingFormValues>({
    resolver: zodResolver(createMeetingSchema),
    defaultValues: {
      name: "",
      targetBook: "",
      startDate: "",
      endDate: "",
    },
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  return (
    <Modal open={open} onClose={handleClose} title="교환독서 모임 만들기">
      <form className="space-y-4 p-4" onSubmit={handleSubmit(values => onSubmit(values))}>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">모임명</label>
          <input
            {...register("name")}
            className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-1 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="예: 역행자 함께 읽기"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">목표 도서</label>
          <input
            {...register("targetBook")}
            className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-1 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="예: 역행자"
          />
          {errors.targetBook && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.targetBook.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">시작일</label>
            <input
              type="date"
              {...register("startDate")}
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-1 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.startDate.message}</p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">종료일</label>
            <input
              type="date"
              {...register("endDate")}
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-1 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            {errors.endDate && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.endDate.message}</p>}
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>
            취소
          </Button>
          <Button type="submit" className="flex-1" disabled={isPending}>
            {isPending ? "생성 중..." : "만들기"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
