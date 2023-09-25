import { getPoints } from "@/getPoints";
import { FC } from "react";

type Props = {
  className?: string;
};

export const Score: FC<Props> = async ({ className }) => {
  const data = await getPoints();

  const resultM = data ? data[0] : ["???", "???", "???", "???"];
  const resultH = data ? data[1] : ["???", "???", "???", "???"];
  return (
    <div className={className + " bg-gray-100 lg:px-20 md:px-20 px-4 py-6"}>
      <h1 className="text-2xl font-bold text-center mb-3">最終得点</h1>
      <div className="flex font-bold">
        <div className="w-[100px]">
          <div className="mb-3 h-12"> </div>
          <div className="bg-black text-white mb-3 h-12 flex items-center">
            <p className="mx-auto">1組</p>
          </div>
          <div className="bg-red-500 text-white mb-3 h-12 flex items-center">
            <p className="mx-auto">2組</p>
          </div>
          <div className="bg-yellow-300 text-black mb-3 h-12 flex items-center">
            <p className="mx-auto">3組</p>
          </div>
          <div className="bg-green-600 text-white mb-3 h-12 flex items-center">
            <p className="mx-auto">4組</p>
          </div>
        </div>
        <div className="w-full ml-3 text-center">
          <div className="bg-white mb-3 h-12 flex items-center">
            <p className="mx-auto">中学</p>
            <div className="bg-gray-100 w-3 h-full"></div>
            <p className="mx-auto">高校</p>
          </div>
          <div className="bg-white mb-3 h-12 flex items-center">
            <p className="mx-auto w-10">{resultM[0]}</p>
            <div className="bg-gray-100 w-3 h-full"></div>
            <p className="mx-auto w-10">{resultH[0]}</p>
          </div>
          <div className="bg-white mb-3 h-12 flex items-center">
            <p className="mx-auto w-10">{resultM[1]}</p>
            <div className="bg-gray-100 w-3 h-full"></div>
            <p className="mx-auto w-10">{resultH[1]}</p>
          </div>
          <div className="bg-white mb-3 h-12 flex items-center">
            <p className="mx-auto w-10">{resultM[2]}</p>
            <div className="bg-gray-100 w-3 h-full"></div>
            <p className="mx-auto w-10">{resultH[2]}</p>
          </div>
          <div className="bg-white mb-3 h-12 flex items-center">
            <p className="mx-auto w-10">{resultM[3]}</p>
            <div className="bg-gray-100 w-3 h-full"></div>
            <p className="mx-auto w-10">{resultH[3]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
