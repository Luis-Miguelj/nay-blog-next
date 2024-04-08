/* eslint-disable @next/next/no-img-element */
// import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
import { motion } from 'framer-motion'
export function Perfil() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full flex items-center justify-center"
      // id="fundo-perfil"
    >
      <div className="w-11/12 h-5/6 p-10 flex justify-between rounded-md shadow">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="flex flex-col gap-5 w-full">
            <h1 className="text-5xl">Nay Barbosa</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              odio earum ipsum doloremque illum rem ducimus tempore fugit non
              dolores saepe quaerat, facilis voluptatem eum nam. Ad provident at
              harum!
            </p>
          </div>
          <div className="container flex gap-5">
            <h1>Instagram</h1>
            <h1>Facebook</h1>
          </div>
        </div>
        <div className="w-1/2 h-full px-10 py-5">
          <img
            src="./fundo-login.jpg"
            alt=""
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
      {/* <div className="w-1/2 h-4/5 flex justify-center items-center bg-zinc-300 p-10">
        <div className="w-4/5 h-full bg-zinc-900">
          <img src="./public/fundo" alt="" />
        </div>
      </div>
      <div className="w-1/2 bg-zinc-900">Olá mundo</div> */}
    </motion.div>
  )
}
