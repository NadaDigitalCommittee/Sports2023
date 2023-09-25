import Image from "next/image";
import { Score } from "@/components/Score";
import { Live } from "@/components/Live";

export default async function Home() {
  return (
    <>
      <div
        className={"fixed -z-10 bg-no-repeat w-full h-full"}
        style={{
          backgroundImage: "url(/img/back.png)",
          backgroundSize: "150vh auto",
          backgroundPositionY: "-25lvh",
          backgroundPositionX: "center",
          backgroundColor: "#1b254a",
        }}
      ></div>
      <main className="lg:w-3/5 md:w-4/5 w-full mx-auto relative z-10">
        <Image
          src="/img/back2.png"
          alt="logo"
          width={400}
          height={400}
          className="mx-auto py-6"
          unoptimized
        />
        <Score />

        <Live />

        <div className="w-full text-base leading-8 px-6 lg:px-48 mb-6 mt-24 text-white">
          <p>
            コロナが収束し始めたことで、学校の様々な行事が通常開催出来た2022年。体育祭も競技数が2倍に増え、コロナ前の盛り上がりを取り戻しました。
          </p>
          <p>
            そして今年、2023年。より良い体育祭へ、灘校体育祭を新たなステージへと「進」める。この思いを胸に3ヶ月間準備を進めて参りました。
          </p>
          <br />
          <p>
            体育祭は、灘校の生徒全員が同じ場所に集まり、同じ1つのことを全力で楽しむ唯一の場所であり、それと同時に高三にとっては灘校生活最後の学校行事です。私は、生徒ひとりひとりが体育祭を全力で楽しみ、灘校生活の思い出の1つとなることを願っています。
          </p>
          <br />
          <p>灘校生活の思い出の1つとなる、活気溢れた体育祭へ！</p>
          <p className="font-serif text-right text-sm">第94回灘校体育祭 体育委員長</p>
          <p className="font-serif text-right text-2xl">N.M.</p>
          <Image src={"/img/president.jpg"} width={500} height={500} alt="体育委員長" className="mx-auto my-6"/>
        </div>
      </main>
    </>
  );
}
