import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo-small.svg"
        alt="Topmar logo"
        width={176}
        height={64}
        className="h-auto w-auto object-contain"
        priority
      />
    </div>
  )
}
