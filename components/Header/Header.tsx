'use client'

import Logo from './Logo'
import Navbar from './Navbar'
import MenuToggle from './MenuToggle'

export default function Header() {
  return (
    <header className="w-full border-b bg-whiteNav text-black">
      <div className="layout-shell flex items-center justify-between py-1">
        <Logo />
        <div className="flex items-center gap-6">
          <Navbar />
          <MenuToggle />
        </div>
      </div>
    </header>
  )
}
