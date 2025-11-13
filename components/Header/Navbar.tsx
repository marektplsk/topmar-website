import PhoneOutgoingIcon from "@/components/icons/PhoneOutgoingIcon";
export default function Navbar() {
  const navItems = ['Naša vízia', 'Spoznajte Appo®', 'Jazyk', 'Kontakt']

  return (
    <nav className="hidden md:flex items-center gap-10">
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <div
            key={item}
            className="px-2 py-1 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
      <div>
        <button className="flex h-10 w-10 items-center justify-center rounded-[24px] border bg-[#006BD8] text-white transition hover:bg-[#0055b5]">
          <PhoneOutgoingIcon size={16} />
        </button>
      </div>
    </nav>
  )
}
