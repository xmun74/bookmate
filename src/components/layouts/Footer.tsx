export function Footer() {
  return (
    <footer className="w-full px-6 py-12">
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-sm font-semibold text-black dark:text-slate-400">BookMate</div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">
              이용약관
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">
              개인정보처리방침
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">© 2025 BookMate. All rights reserved.</div>
      </div>
    </footer>
  );
}
