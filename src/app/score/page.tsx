import { getPoints } from "@/getPoints";
import { Metadata } from "next";
import Image from "next/image";

export default async function Home() {
  const data = await getPoints();

  let r1: string | number;
  let r2: string | number;
  let r3: string | number;
  let r4: string | number;

  // if (!data) {
  //   r1 = "???";
  //   r2 = "???";
  //   r3 = "???";
  //   r4 = "???";
  // } else {
  //   r1 = data[0][0] + data[1][0];
  //   r2 = data[0][1] + data[1][1];
  //   r3 = data[0][2] + data[1][2];
  //   r4 = data[0][3] + data[1][3];
  // }
  r1=1753
  r2=1747
  r3=1702
  r4=1855

  return (
    <main
      style={{
        width: "min(1000px,80vw)",
        height: "min(1000px,75vw)",
        marginTop: "10vh",
      }}
      className="relative mx-auto -z-10"
    >
      <Image src="/img/points.png" alt="" className="relative" objectFit="contain" layout="fill" />
      <div
        style={{
          fontSize: "5vh",
        }}
      >
        <div className="h-1/2 w-1/2 text-white absolute flex items-center justify-center">
          <p>{r1}</p>
        </div>
        <div className="h-1/2 w-1/2 left-1/2 text-white absolute flex items-center justify-center">
          <p>{r2}</p>
        </div>
        <div className="h-1/2 w-1/2 top-1/2 text-white absolute flex items-center justify-center">
          <p>{r3}</p>
        </div>
        <div className="h-1/2 w-1/2 top-1/2 left-1/2 text-white absolute flex items-center justify-center">
          <p>{r4}</p>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "第94回灘校体育祭 進 得点",
  description: "第94回灘校体育祭公式サイトです。",
};
