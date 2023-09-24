import { ModalButton } from "@/components/Modal";
import programs from "@/programs.json";
import { Metadata } from "next";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="lg:w-3/5 md:w-4/5 w-full mx-auto">
      <p className="first-letter:text-theme text-4xl pl-6 my-8 font-garamond font-bold">Program</p>
      <div className="bg-theme w-full h-12 my-3 flex items-center">
        <p className="mx-auto text-white font-bold">午前の部</p>
      </div>
      {programs.data.map((program, i) => {
        return (
          <>
            {i === 17 && (
              <div className="bg-theme w-full h-12 my-3 flex items-center">
                <p className="mx-auto text-white font-bold">午後の部</p>
              </div>
            )}
            <ModalButton
              className="w-full h-12 flex items-center hover:bg-gray-200"
              innerChildren={
                <>
                  <p className="mx-6 w-10 text-theme font-bold">{`〔${program.id + 1}〕`}</p>
                  <p className="w-28">{`【${program.group}】`}</p>
                  <p>{program.name}</p>
                  <Image
                    src="/img/yajirusi2.svg"
                    width={15}
                    height={15}
                    alt=""
                    className="fill-black ml-2"
                  ></Image>
                </>
              }
            >
              <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col items-center w-80 mx-auto h-[300px] bg-white py-3 px-6">
                  <h3 className="text-xl pb-6">{program.name}</h3>
                  <p>{program.description}</p>
                  <p className="bg-theme text-white w-20 h-8 text-center mb-6 mt-auto">閉じる</p>
                </div>
              </div>
            </ModalButton>
          </>
        );
      })}
    </main>
  );
}

export const metadata: Metadata = {
  title: "第94回灘校体育祭 進 プログラム",
  description: "第94回灘校体育祭公式サイトです。",
};
