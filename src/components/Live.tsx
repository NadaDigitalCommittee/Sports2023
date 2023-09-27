import { base, live, liveEmbedURL, liveURL } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

type Props = {};

export const Live: FC<Props> = () => {
  return (
    <div className="w-full">
      {live === "Live" ? (
        //配信中
        <Link href={liveURL}>
          <div className="bg-theme h-8 flex items-center mt-6">
            <p className="mx-auto font-bold text-white">YouTubeでの配信中</p>
          </div>
          <div className="border-theme mb-6">
            <div
              className="sm:w-full md:w-full lg:w-2/3 mx-auto"
              style={{
                height: "40vh",
              }}
            >
              <iframe
                width={"100%"}
                height={"100%"}
                src={liveEmbedURL}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </Link>
      ) : live == "Finished" ? (
        //終了
        <div className="bg-theme h-6 my-6">
          <p className="text-center text-white">ライブ配信は終了しました。</p>
        </div>
      ) : (
        //開始前
        <div>
          <div className="bg-theme my-6">
            <p className="text-center text-white">ライブ配信は準備中です！</p>
          </div>
          <div className="px-6">
            <Image
              src={`${base}/img/youtube.svg`}
              alt="youtube"
              width={500}
              height={200}
              className="mx-auto"
            />
            <div className="flex items-center justify-center my-3">
              <p className="text-xl font-garamond font-bold text-white">Coming soon...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
