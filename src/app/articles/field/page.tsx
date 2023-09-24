
import Article from "@/components/Articles";
import { Metadata } from "next/types";

export default function Page() {
  return <Article params={"field"} />;
}
export const metadata: Metadata = {
  title: "第94回灘校体育祭 進 フィールド課特集",
  description: "第94回灘校体育祭公式サイトです。",
};
