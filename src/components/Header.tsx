import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import Image from "next/image";
import { FC } from "react";
import { articles } from "@/articles";

export const Header: React.FC = () => {
  return (
    <header className="w-screen fixed bg-white h-16 z-30 shadow-lg">
      <div className="lg:w-4/5 sm:w-full px-4 mx-auto flex pt-6 pb-3">
        <Link href="/">
          <h1 className="text-[22px] font-bold relative z-20">第94回灘校体育祭</h1>
        </Link>
        <HamburgerMenu>
          <div className="w-full lg:w-3/5 mx-auto px-8 text-theme font-bold text-xl">
            <div className="h-20"></div>
            <Menu href="/" title="トップページ" />
            <div className="border-gray-300 border-b-[1px]"></div>
            <Menu href="/programs" title="プログラム" />
            <div className="border-gray-300 border-b-[1px]"></div>
            <Menu href="/score" title="得点" />
            <div className="border-gray-300 border-b-[1px]"></div>
            <Menu href="/articles" title="記事特集" />
            {articles.map((a, i) => {
              return (
                <SubMenu href={`/articles/${a.path}`} title={"体育委員会 " + a.title} key={i} />
              );
            })}
            <SubMenu href="/articles/sumo" title="相撲特集" />
            <SubMenu href="/articles/cheer" title="応援団特集" />
            <SubMenu href="/articles/live" title="映像研究部特集" />
            <div className="border-gray-300 border-b-[1px]"></div>
          </div>
        </HamburgerMenu>
      </div>
    </header>
  );
};

type MenuProps = {
  href: string;
  title: string;
};

const Menu: FC<MenuProps> = ({ href, title }) => {
  return (
    <Link href={href} className="w-full">
      <div className="h-16 flex items-center">
        <p className="ml-6 w-[120px]">{title}</p>
      </div>
    </Link>
  );
};

type SubMenuProps = {
  href: string;
  title: string;
};

const SubMenu: FC<SubMenuProps> = ({ href, title }) => {
  return (
    <Link href={href} prefetch={true} className="flex h-9 items-center">
      <p className="ml-6 mr-1 text-black text-sm">{title}</p>
      <Image src="/img/yajirusi2.svg" width={12} height={12} alt="" className="fill-black"></Image>
    </Link>
  );
};
