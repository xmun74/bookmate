export const meetingKeys = {
  all: ["meetings"] as const,
  my: () => [...meetingKeys.all, "my"] as const,
  public: () => [...meetingKeys.all, "public"] as const,
};
