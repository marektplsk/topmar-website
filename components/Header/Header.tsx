'use client'

import Logo from './Logo'
import Navbar from './Navbar'
import MenuToggle from './MenuToggle'

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white text-zinc-900">
      <div className="mx-auto max-w-[1440px] px-[128px] flex max-w-6xl items-center justify-between px-10 py-2">
        <Logo />
        <div className="flex items-center gap-10">
          <Navbar />
          <MenuToggle />
        </div>
      </div>
    </header>
  )
}
