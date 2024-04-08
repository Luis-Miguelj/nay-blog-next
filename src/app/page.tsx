'use client'
import { Perfil } from '@/components/perfil/perfil'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <div className="h-screen overflow-hidden overflow-y-auto">
      <div className=" w-full h-screen flex gap-5 items-center ">
        <div
          className="w-full h-full flex flex-col justify-center items-center shadow"
          id="home-img"
        >
          <motion.h1
            className="text-7xl font-medium text-zinc-100"
            animate={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
          >
            Bem vindo(a)
          </motion.h1>
          <motion.h2
            className="text-base text-zinc-100 font-medium"
            animate={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
          >
            Nay Photography
          </motion.h2>
        </div>
      </div>
      <div className="h-screen flex max-w-full mx-auto p-12">
        <Perfil />
      </div>
    </div>
  )
}
