import Image from 'next/image';
import React from 'react'
import Link from "next/link"
import { BiRightArrowCircle } from 'react-icons/bi'
import { GamesProps } from '@/Types/types';

type ImageProps = {
  data: GamesProps
}

export default async function GameCard({ data }: ImageProps) {

  return (
    <Link href={`/game/${data.id}`}>
      <section className='w-full bg-slate-200 rounded-lg p-4 mb-5 hover:scale-105 transition-all duration-300'>
        <div className='relative w-full h-56 '>
          <Image
            src={data.image_url}
            alt={data.description}
            className='rounded-lg object-cover'
            fill={true}
            quality={100}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 44vw "
          />
        </div>
        <div className='flex justify-between mt-4 '>
          <h1 className='text-sm font-bold text-ellipsis truncate whitespace-nowrap overflow-hidden'>{data.title}</h1>
          <BiRightArrowCircle size={24} className='flex-shrink-0' />
        </div>
      </section>
    </Link>
  )
}
