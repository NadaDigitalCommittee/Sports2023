"use client";
import { useState } from "react";

type Props = {
  children?: React.ReactNode;
  innerChildren?: React.ReactNode;
  className?: string;
};

export const ModalButton: React.FC<Props> = ({ children, className, innerChildren }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={className}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {innerChildren}
      </div>

      <div
        className={`fixed inset-0 z-30 bg-opacity-50 bg-black transition-opacity duration-200 h-full w-full ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {children}
      </div>
    </div>
  );
};
