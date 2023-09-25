import { articles } from "@/articles";
import { Metadata } from "next";
import Link from "next/link";

export default function Page() {
  return (
    <main className="lg:w-3/5 md:w-4/5 w-full mx-auto">
      <p className="first-letter:text-theme text-4xl pl-6 my-8 font-garamond font-bold">Articles</p>
      {articles.map((a, i) => {
        return (
          <Block title={a.title} sub="体育委員会各課紹介" path={`/articles/${a.path}`} key={i} />
        );
      })}
      <Block title="相撲特集" sub="" path="/articles/sumo" />
      <Block title="応援団特集" sub="" path="/articles/cheer" />
      <Block title="映像研究部特集" sub="" path="/articles/live" />
    </main>
  );
}

function Block({ title, sub, path }: { title: string; sub?: string; path: string }) {
  return (
    <Link href={path}>
      <div className="w-full h-40 lg:h-96 md:h-60 bg-theme px-6 py-3 my-3">
        <p className="font-bold text-white text-sm">{sub}</p>
        <p className="font-bold text-white text-2xl my-2">{title}</p>
      </div>
    </Link>
  );
}

export const metadata: Metadata = {
  title: "第94回灘校体育祭 進 記事一覧",
  description: "第94回灘校体育祭公式サイトです。",
};
