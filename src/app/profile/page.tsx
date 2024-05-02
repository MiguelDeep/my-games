import Container from '@/components/container'
import React from 'react'
import Image from "next/image"
import user from "../../../public/user.png"
import { IoShareSocial } from "react-icons/io5";
import Card from './components/CardsAdd';

export default function Profile() {
  return (
    <main className='w-full'>
      <Container>
        <div className='flex justify-between flex-col sm:flex-row'>
          <div className=' flex justify-center items-center py-4 flex-col sm:flex-row sm:justify-normal '>
            <Image src={user} alt={"MiguelDeep"} className=' w-56 h-56 rounded-full object-cover' />
             <h1 className=' px-2 text-2xl font-bold'>Miguel Deep</h1>
          </div>
          <div className='flex justify-center items-center gap-4 mb-2'>
             <button className='bg-blue-950 text-white p-3 rounded-lg'>
              Configuração
             </button>
             <button className='bg-blue-950 p-2 rounded-lg' >
             <IoShareSocial size={30} color='#fff'/>
             </button>
          </div>
        </div>
        <div className='grid  sm:grid-cols-3 gap-4 mb-4'>
        {
          Array.from({length:3}).map((i,index)=> <Card key={index}/>)
        }
        </div>
      </Container>
    </main>
  )
}
