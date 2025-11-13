'use client';

import { Mail, Phone } from "lucide-react";
export type NavItemConfig = {
  label: string;
  href?: string;
};
export const NAV_ITEMS: NavItemConfig[] = [
  { label: "Naša vízia" },
  { label: "Spoznajte Appo®" },
  { label: "Jazyk" },
  { label: "Lokácia" },
  { label: "Blog" },
  { label: "Zoznam služieb" },
  { label: "Kontakt" },
];

export const CALL_BUTTON = {
  ariaLabel: "Call us",
  iconSize: 16,
};

export const CONTACT_BUTTON = {
  ariaLabel: "Email us",
  iconSize: 16,
};
type NavItemFrameProps = {
  item: NavItemConfig;
  onSelect: (label: string) => void;
};
function NavItemFrame({ item, onSelect }: NavItemFrameProps) {
  const isPlaceholder = item.label.trim().length === 0;
  const handleClick = () => {
    if (isPlaceholder) return;
    onSelect(item.label);
  };
  const content = (
    <span className="nav-link-btn text-nav-xs font-normal text-black/80 transition-colors hover:text-black">
      {item.label || "\u00a0"}
    </span>
  );
  return (
    <div className="px-4">
      <div className="py-2">
        {item.href ? (
          <a href={item.href} className="global-nav-link" aria-label={item.label}>
            {content}
          </a>
        ) : (
          <button
            type="button"
            className="global-nav-link"
            onClick={handleClick}
            disabled={isPlaceholder}
            aria-label={item.label || "Navigation placeholder"}
          >
            {content}
          </button>
        )}
      </div>
    </div>
  );
}
type NavbarProps = {
  onSelect?: (label: string) => void;
};
export default function Navbar({ onSelect }: NavbarProps = {}) {
  const handleNavItemAction =
    onSelect ||
    ((label: string) => {
      console.info(`[navbar] action requested for: ${label}`);
    });

  return (
    <nav className="nav-full-wrapper-container flex items-center gap-2 sticky top-0 z-50">
      <div className="global-nav-link-text-container flex items-center gap-2">
        {NAV_ITEMS.map((item, index) => (
          <NavItemFrame
            key={`${item.label}-${index}`}
            item={item}
            onSelect={handleNavItemAction}
          />
        ))}
      </div>
      <div className="global-nav-link-button-container flex items-center gap-2">
        <button
          className="nav-action-icon flex px-2 py-3 items-center justify-center"
          aria-label={CALL_BUTTON.ariaLabel}
        >
          <Phone size={CALL_BUTTON.iconSize} />
        </button>
        <button
          className="nav-action-icon flex px-2  py-3 items-center justify-center"
          aria-label={CONTACT_BUTTON.ariaLabel}
        >
          <Mail size={CONTACT_BUTTON.iconSize} />
        </button>
      </div>
    </nav>
  );
}
