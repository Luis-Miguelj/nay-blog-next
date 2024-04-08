'use client'
import { useRouter } from 'next/navigation'
/* eslint-disable @next/next/no-img-element */
export function Header() {
  const { push } = useRouter()

  return (
    <header className="flex items-center justify-between px-10 bg-white h-24 border fixed w-full overflow-hidden">
      <div className="flex items-center gap-5">
        <button onClick={() => push('/')} className="container w-24 h-full">
          <img
            src="./logo-nay.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </button>
        <div>
          <ul className="text-xs font-medium flex gap-2">
            <a
              href="/portifolio"
              className="p-2 rounded hover:bg-purple-400 hover:bg-opacity-35 transition-all duration-300"
            >
              Portifolio
            </a>
            <a
              href="/postagens"
              className="p-2 rounded hover:bg-purple-400 hover:bg-opacity-35 transition-all duration-300"
            >
              Postagens
            </a>
          </ul>
        </div>
      </div>
      <div>menu</div>
    </header>
  )
}
