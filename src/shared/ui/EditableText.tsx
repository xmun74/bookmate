"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/shared/libs";

interface EditableTextProps {
  value: string;
  onSave: (value: string) => void;
  placeholder?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  multiline?: boolean;
}

export function EditableText({
  value,
  onSave,
  placeholder = "입력하세요",
  as: Tag = "span",
  className,
  multiline = false,
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
    const trimmed = editValue.trim();
    if (trimmed !== value) onSave(trimmed);
  };

  if (isEditing) {
    const inputClass =
      "w-full rounded-lg border border-gray-300 bg-white px-2 py-1 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white";
    return multiline ? (
      <textarea
        ref={inputRef as React.RefObject<HTMLTextAreaElement>}
        value={editValue}
        onChange={e => setEditValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={e => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            (e.target as HTMLTextAreaElement).blur();
          }
        }}
        rows={3}
        className={cn(inputClass, className)}
        placeholder={placeholder}
      />
    ) : (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={editValue}
        onChange={e => setEditValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={e => e.key === "Enter" && (e.target as HTMLInputElement).blur()}
        className={cn(inputClass, className)}
        placeholder={placeholder}
      />
    );
  }

  return (
    <Tag
      className={cn("cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50", className)}
      onClick={() => setIsEditing(true)}
      title="클릭하여 수정"
    >
      {value || <span className="text-gray-400">{placeholder}</span>}
    </Tag>
  );
}
