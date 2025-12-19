import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="w-full px-6 pt-32 pb-24">
      <div className="mx-auto">
        <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 dark:border-white/10 dark:bg-white/5">
          <span className="text-xs font-medium text-gray-900 dark:text-gray-100">함께 읽고 성장하는 독서 플랫폼</span>
        </div>

        <h1 className="mb-6 max-w-3xl text-5xl leading-tight font-bold tracking-tight text-black md:text-7xl dark:text-white">
          친구와 함께
          <br />
          성장하는 독서
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400">
          교환독서와 독서 모임을 통해 혼자가 아닌 친구들과 함께 책을 읽고 성장하는 경험을 시작하세요.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg">무료로 시작하기</Button>
          <Button size="lg" variant="outline">
            자세히 알아보기
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5">
          <div className="flex aspect-video items-center justify-center">
            <div className="text-sm text-gray-400 dark:text-gray-600">서비스 프리뷰</div>
          </div>
        </div>
      </div>
    </section>
  );
}
