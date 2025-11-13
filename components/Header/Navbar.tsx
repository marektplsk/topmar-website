import PhoneOutgoingIcon from "@/components/icons/PhoneOutgoingIcon";

const NAV_ITEMS = ["Naša vízia", "Spoznajte Appo®", "Jazyk", "Kontakt"] as const;
const CALL_BUTTON = {
  ariaLabel: "Call us",
  iconSize: 18,
};

export default function Navbar() {

  return (
    <nav className="flex items-center gap-8 mobile:hidden">
      <div className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <span
            key={item}
            className="text-[14px] font-medium text-black/80 transition-colors hover:text-black mobile:text-[24px]"
          >
            {item}
          </span>
        ))}
      </div>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue text-black transition-colors hover:bg-blue/90"
        aria-label={CALL_BUTTON.ariaLabel}
      >
        <PhoneOutgoingIcon size={CALL_BUTTON.iconSize} />
      </button>
    </nav>
  );
}
