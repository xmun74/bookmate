import { ThemeToggleBtn } from "@/components/layouts/ThemeToggleBtn";

export function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-black/80">
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <div className="text-xl font-semibold text-black dark:text-white">BookMate</div>
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              소개
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggleBtn />
          <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100">
            시작하기
          </button>
        </div>
      </div>
    </nav>
  );
}
