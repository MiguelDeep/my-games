import React from 'react'
import logo from "/public/logo.svg"
import Image from 'next/image'
import Link from 'next/link'
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <header className='w-full h-28 bg-slate-100 text-black px-2'>
     <div className='max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between'>
        <nav className='flex justify-center items-center gap-4'>
         <Link href={"/"}>
         <Image src={logo} alt='logo deygames' quality={100} priority className='w-full'/>
         </Link>
         <Link href={"/"}>
         Games
         </Link>
         <Link href={"/profile"}>
          Perfil
         </Link>
        </nav>
        <div className='w-10 h-10 rounded-full hidden sm:flex justify-center items-center'>
          <Link href={"/profile"}>
            <CgProfile size={34} color='475569' />
          </Link>
        </div>
     </div>


    </header>
  )
}
