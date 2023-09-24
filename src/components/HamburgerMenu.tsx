"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export const HamburgerMenu: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggle} type="button" className="relative ml-auto" aria-label="toggle menu">
        <Image
          src={isOpen ? "/img/menuopened.svg" : "/img/menuclosed.svg"}
          width={40}
          height={40}
          alt=""
          className="relative z-20"
        />
      </button>
      <div
        className={`fixed inset-0 z-10 bg-opacity-1000 bg-white transition-opacity duration-200 h-screen ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, 300));
          toggle();
        }}
      >
        {children}
      </div>
    </>
  );
};
