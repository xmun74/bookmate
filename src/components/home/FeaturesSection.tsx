export function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "교환독서",
      description: "친구와 같은 책을 읽거나 서로 추천한 책을 교환하며 진행률과 감상을 실시간으로 공유하세요.",
      iconPath:
        "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      id: 2,
      title: "독서 모임",
      description: "관심사가 비슷한 사람들과 독서 모임을 만들고 함께 책을 읽으며 토론하세요.",
      iconPath:
        "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    },
    {
      id: 3,
      title: "독서 캘린더",
      description: "일별 독서 기록과 통계를 통해 독서 습관을 형성하고 성취감을 느껴보세요.",
      iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      id: 4,
      title: "하이라이트 & 메모",
      description: "인상 깊은 구절을 저장하고 메모를 남기며 친구들과 공유하세요.",
      iconPath:
        "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    },
    {
      id: 5,
      title: "독서 통계",
      description: "올해 읽은 책, 독서 시간, 장르별 분석 등 나만의 독서 데이터를 확인하세요.",
      iconPath:
        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      id: 6,
      title: "맞춤 추천",
      description: "독서 취향 분석을 통해 나에게 딱 맞는 책을 추천받고 새로운 책을 발견하세요.",
      iconPath:
        "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
  ];

  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold text-black md:text-4xl dark:text-white">주요 기능</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">BookMate와 함께 독서의 즐거움을 경험하세요</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(feature => (
            <div
              key={feature.id}
              className="group rounded-lg border border-gray-200 p-6 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/20"
            >
              <div className="mb-3">
                <svg
                  className="h-6 w-6 text-gray-900 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
