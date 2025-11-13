'use client'

import { useEffect, useState } from 'react'

import Logo from './Logo'
import Navbar from './Navbar'
import MenuToggle from './MenuToggle'

export default function Header() {
  const [isFrosted, setIsFrosted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFrosted(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`absolute inset-0 z-0 transition-all ${
          isFrosted
            ? 'bg-white/80 backdrop-blur-[140px] brightness-125 saturate-150'
            : 'bg-white/70 backdrop-blur-[0px]'
        }`}
      />
      <div className="global-nav-container relative frosted layout-shell flex items-center justify-between py-0">
        <Logo />

        <div className="flex items-center">
          <Navbar />
          <MenuToggle />
        </div>
      </div>
    </header>
  )
}