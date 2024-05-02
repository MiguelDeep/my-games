import React from 'react'
import Image from "next/image"
import { api } from '@/services/api'
import { GamesProps } from '@/Types/types'
import Container from '@/components/container'
import Span from '@/components/Span'
import { redirect } from 'next/navigation'
import GameCard from '@/components/ImageGames'

type gamesProps = {
  params: {
    id: string
  }
}


async function getData(id: string) {
  try {

    const response = await api.get(`/?api=game&id=${id}`);
    return response.data;
  } catch (e) {
    throw new Error("Failed to get id");
  }
}

async function getGamesDay() {
  const response = await api.get<GamesProps>("/?api=game_day");
  return response.data;
}
export default async function page({ params }: gamesProps) {
  const data: GamesProps = await getData(params.id)
  const day :GamesProps = await getGamesDay();

  if(!data){
    redirect("/")
  }
  return (
    <main>
      <div className='relative w-full h-80 sm:h-96 overflow-hidden'>
        <Image
          src={data.image_url}
          alt={data.title}
          className='rounded-lg object-cover opacity-80'
          fill={true}
          quality={100}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 44vw "
        />
      </div>
      <Container>
        <div className='py-4'>
          <h1 className=' text-2xl font-bold mb-6'>{data.title}</h1>
          <p>{data.description}</p>
          <h1 className=' text-2xl font-bold mb-6 mt-6'>Plataformas disponíveis:</h1>
         
          <div className='flex gap-4'>
          {data.platforms.map((date,index) => (
            <Span key={index.toString()} >{date}</Span>
          ))}
          </div>
          <h1 className=' text-2xl font-bold  mb-6 mt-6'>Categorias</h1>
          <div className='flex gap-4'>
            {data.categories.map((date,index) => (
              <Span key={index.toString()}>{date}</Span>
            ))}
          </div>
          <h1 className=' text-2xl font-bold  mb-6 mt-6'>Lancamento: {data.release}</h1>
          <h1 className=' text-2xl font-bold  mb-6 mt-6 '>Jogos Recomedandos:</h1>
          <GameCard data={day}/>
        </div>
      </Container>

    </main>
  )
}
