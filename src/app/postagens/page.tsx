'use client'

import { Database } from '@/firebase/database/database'

export default function Postagens() {
  const { item } = Database()

  return (
    <div className="h-screen flex flex-col">
      <div className="h-24"></div>
      <div className="w-full h-full mx-auto space-y-5 overflow-hidden overflow-y-auto py-10">
        {item.map((items, index) => {
          return (
            <div
              key={index}
              className=" max-w-6xl mx-auto h-96 space-x-5 rounded shadow"
              style={{
                backgroundImage: `url('${items.imagens[0].photos}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="w-full h-full flex flex-col bg-zinc-800 bg-opacity-40 p-10">
                <div className="container flex flex-col gap-3 overflow-hidden text-zinc-100 h-full">
                  <div>
                    <h1 className="text-3xl font-medium">{items.title}</h1>
                  </div>
                  <div className="w-96 h-48 overflow-hidden break-words text-wrap">
                    <p className="w-full text-ellipsis line-clamp-3">
                      {items.description}
                    </p>
                  </div>
                </div>
                <div className="container flex justify-center items-start ">
                  <button className=" p-1 rounded w-32 border text-zinc-100 hover:bg-purple-400 hover:bg-opacity-40 transition-all duration-300">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
