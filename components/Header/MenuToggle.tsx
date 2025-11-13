'use client';

import Image from "next/image";
import { X } from "lucide-react";

type MenuToggleProps = {
  isOpen?: boolean;
  onToggle?: () => void;
};

export default function MenuToggle({
  isOpen = false,
  onToggle = () => {},
}: MenuToggleProps) {
  return (
    <button
      className="mobile:flex hidden items-center justify-center p-2"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      type="button"
      onClick={onToggle}
    >
      {isOpen ? (
        <X size={24} />
      ) : (
        <Image
          src="/nav-hamburgerMenu-action-icon.svg"
          alt="Navigation menu"
          width={24}
          height={24}
          priority
        />
      )}
    </button>
  );
}
