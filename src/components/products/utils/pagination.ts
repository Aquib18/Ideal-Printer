export function getPageNumbers(
  current: number,
  total: number
): (number | "...")[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>([
    1,
    total,
    current,
    current - 1,
    current + 1,
  ]);

  const sorted = [...pages]
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const result: (number | "...")[] = [];

  sorted.forEach((page, index) => {
    if (
      index > 0 &&
      page - sorted[index - 1] > 1
    ) {
      result.push("...");
    }

    result.push(page);
  });

  return result;
}