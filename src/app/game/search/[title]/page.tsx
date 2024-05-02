import Container from '@/components/container'
import GameCard from '@/components/ImageGames'
import Input from '@/components/Input/Input'
import { api } from '@/services/api'
import { GamesProps } from '@/Types/types'
import { decode } from 'punycode'
import React from 'react'

type searchProps={
  params:{
    title:string
  }
}
async function getData(search:string) {
 try{
  const decodeU = decodeURI(search)
  const response = await api.get(`/?api=game&title=${decodeU}`);
  return response.data;
 }catch(e){
    return null;
 }
}

export default async function page({params}:searchProps) {
  const dataImage:GamesProps[] = await getData(params.title);
  return (
   <main className='w-full text-black'>
       <Container>
        <Input />
        <h1 className='font-bold text-xl mt-8 mb-5'>Veja oque encontramos na nossa base:</h1>
         {!dataImage && <h1 className='text-center mt-24 text-3xl font-bold'>Esse não foi encontrado!</h1>}
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
           dataImage && dataImage.map((data)=>(
              <GameCard key={data.id} data={data}/>
            ))
          }
        </section>
    </Container>
   </main>
  )
}
