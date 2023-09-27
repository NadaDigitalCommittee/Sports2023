import { articles } from "@/articles";
import { base } from "@/constants";
import { sumo } from "@/sumo";
import Image from "next/image";

export default function Article({ params }: { params: string }) {
  const article = articles.find((a) => a.path === params);
  if (!article) {
    return (
      <main className="h-screen w-full flex justify-center items-center">
        <p>ページが見つかりませんでした。</p>
      </main>
    );
  }

  return (
    <main className="lg:w-3/5 md:w-4/5 w-full mx-auto pt-[60px] px-6">
      <div className="h-1/5"></div>
      <h1 className="text-5xl first-letter:text-theme font-bold mb-6">{article.title}</h1>
      <div className="flex flex-col justify-center items-center pb-6">
        <Image src={`${base}${article.img}`} alt="" width={400} height={400} className="rounded-3xl" />
        <div className="pl-2">
          <p className="text-2xl mt-[10px] ml-1 relative pl-3 -z-10">{article.role}</p>
          <div
            className="bg-yellow-300 w-[190px] h-[12px] -top-3 relative -z-20"
            style={{
              clipPath: "polygon(0 0,8% 100%,100% 100%,92% 0)",
            }}
          ></div>
          <p className="text-2xl mt-[10px] ml-[55px] relative -z-10">{article.name}</p>
          <div
            className="bg-yellow-300 w-[220px] h-[16px] -top-3 relative ml-[40px] -z-20"
            style={{
              clipPath: "polygon(0 0,8% 100%,100% 100%,92% 0)",
            }}
          ></div>
        </div>
      </div>
      {article.content.map((c) => {
        return (
          <>
            <p key={0} className="leading-10 text-base">
              {c}
            </p>
            <div className="h-6"></div>
          </>
        );
      })}
    </main>
  );
}

export function Sumo() {
  return (
    <main className="lg:w-3/5 md:w-4/5 w-full mx-auto pt-[60px]">
      <div className="h-1/5"></div>
      <h1 className="text-5xl first-letter:text-theme font-bold mb-6 ml-6">相撲特集</h1>

      <div className="bg-theme h-6">
        <p className="mx-auto text-white font-bold text-center">力士一覧</p>
      </div>

      <div className="px-6 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-4">
          {sumo.map((s, i) => {
            return (
              <div className="h-[300px] w-full flex flex-col" key={i}>
                <div className="relative h-full w-full flex-grow-[1]">
                <Image
                  src={`${base}/img/sumo/${s.id}.jpg`}
                  fill
                  style={{ objectFit: "contain" }}
                  alt=""                  
                />
                </div>

                <p className="text-center text-sm">{s.grade}</p>
                <p className="text-center font-bold">{s.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export function Cheer() {
  return (
    <main className="lg:w-3/5 md:w-4/5 w-full mx-auto pt-[60px]">
      <div className="h-1/5"></div>
      <h1 className="text-5xl first-letter:text-theme font-bold mb-6 ml-6">応援団特集</h1>
      <div className="px-6">
        <p className="text-lg font-bold py-6">団長挨拶</p>
        <p className="font-bold">一組団長 T.I.</p>
        <Image
          src={`${base}/img/articles/cheer1.png`}
          width={700}
          height={500}
          alt=""
          className="mx-auto my-6"
        />
        <p className="leading-8">
          １組応援団長のT.I.です。久しぶりにクラス対抗の応援合戦が戻ってきました。今年は過去に類をみない難易度と構成、そして迫力に挑戦、圧倒的な演舞で１組を優勝に導きます！大地に轟けハッ！！！
        </p>

        <YouTube id={""} />

        <p className="font-bold pt-6">二組団長 E.T.</p>
        <Image
          src={`${base}/img/articles/cheer2.png`}
          width={700}
          height={500}
          alt=""
          className="mx-auto my-6"
        />
        <p className="leading-8">二組応援団長のE.T.です！頑張るあなたに、幸あれ‼️</p>

        <YouTube id={""} />

        <p className="font-bold pt-6">三組団長 N.M.</p>
        <Image
          src={`${base}/img/articles/cheer3.png`}
          width={700}
          height={500}
          alt=""
          className="mx-auto my-6"
        />
        <p className="leading-8">
          ３組応援団長のN.M.です！３組応援団一丸となった渾身の演舞で体育祭を盛り上げます！！
        </p>

        <YouTube id={""} />

        <p className="font-bold pt-6">四組団長 A.S.</p>
        <Image
          src={`${base}/img/articles/cheer4.png`}
          width={700}
          height={500}
          alt=""
          className="mx-auto my-6"
        />
        <p className="leading-8">
          肆組応援団長のA.S.です。
          <br />
          ——肆組応援団の演舞は，他では見られない清らかさと力強さを併せ持つ——
          <br />
          肆組が全大会掴んだ輝かしい勝利の記憶さえ，一度忘れようじゃないか。心新たに私たちは勝利を掴む。
        </p>

        <YouTube id={""} />
      </div>
    </main>
  );
}

function YouTube({ id }: { id: string }) {
  return (
    <div
      style={{
        height: "40vh",
      }}
      className="my-12"
    >
      <iframe
        width={"100%"}
        height={"100%"}
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
