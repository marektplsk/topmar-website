'use client'

import { useState } from 'react'

export default function MenuToggle() {
  const [open, setOpen] = useState(false)

  return (
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden flex flex-col gap-[5px] p-2"
      aria-label="Toggle menu"
    >
      <svg
        className="w-6 h-6 text-zinc-800 dark:text-zinc-200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
      </svg>
    </button>
  )
}
