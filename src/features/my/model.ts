export const myKeys = {
  all: ["my"] as const,
  profile: () => [...myKeys.all, "profile"] as const,
  readingFeed: () => [...myKeys.all, "readingFeed"] as const,
};
