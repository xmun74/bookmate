/**
 * 목표 날짜까지 남은 일수(D-Day)를 계산합니다.
 * 당일은 D-Day, 과거는 음수, 미래는 양수로 반환합니다.
 */
export function getDDay(endDateStr: string, fromDate: Date = new Date()): number {
  const end = new Date(endDateStr);
  end.setHours(0, 0, 0, 0);
  const from = new Date(fromDate);
  from.setHours(0, 0, 0, 0);
  const diffMs = end.getTime() - from.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}
