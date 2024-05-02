import Image from 'next/image';
import React from 'react'
import Link from "next/link"
import { BiRightArrowCircle } from 'react-icons/bi'
import { GamesProps } from '@/Types/types';

type ImageProps = {
  data: GamesProps
}

export default async function GameCard() {

  return (
      <section className='w-full bg-slate-200 rounded-lg p-4 mb-5 hover:scale-105 transition-all duration-300 animate-pulse'>
        <div className='relative w-full h-56 '>
          <div
            className='rounded-lg object-cover bg-slate-400'
          />
        </div>
        <div className='flex justify-between mt-4 '>
          <h1 className='bg-slate-400 text-sm font-bold text-ellipsis truncate whitespace-nowrap overflow-hidden'></h1>
          <BiRightArrowCircle size={24} className='flex-shrink-0' />
        </div>
      </section>
  )
}
