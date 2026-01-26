import Link from "next/link";
import { ThemeToggleBtn } from "./ThemeToggleBtn";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/95 backdrop-blur-lg dark:border-white/10 dark:bg-black/95">
      <div className="mx-auto flex h-14 items-center justify-between px-4 md:h-16 md:px-6">
        <Link href="/" className="text-lg font-semibold text-black md:text-xl dark:text-white">
          BookMate
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/records"
            className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            기록
          </Link>
          <Link
            href="/groups"
            className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            모임
          </Link>
          <Link href="/my" className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            마이페이지
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggleBtn />
        </div>
      </div>
    </header>
  );
}
