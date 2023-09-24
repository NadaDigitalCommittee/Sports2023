
import Article from "@/components/Articles";
import { Metadata } from "next/types";

export default function Page() {
  return <Article params={"live"} />;
}
export const metadata: Metadata = {
  title: "第94回灘校体育祭 進 映像研究部特集",
  description: "第94回灘校体育祭公式サイトです。",
};
