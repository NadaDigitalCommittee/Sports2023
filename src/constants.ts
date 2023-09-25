export type LiveStatus = "Finished" | "Live" | "Upcoming";
export const live: LiveStatus = "Finished";
const liveId = ""; //非公開
export const liveEmbedURL = `https://www.youtube.com/embed/${liveId}`;
export const liveURL = `https://www.youtube.com/watch?v=${liveId}`;
export const host =
  process.env.NODE_ENV === "development"
    ? `http://localhost:${process.env.PORT || "3000"}`
    : "https://sports.nada-sc.jp";
