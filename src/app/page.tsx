import Container from "@/components/container";
import Image from "next/image";
import { GamesProps } from "@/Types/types"
import { BsArrowRightSquare } from "react-icons/bs"
import { api } from "@/services/api"
import Link from "next/link";
import Input from "@/components/Input/Input";
import GameCard from "@/components/ImageGames";


async function getImage() {
  const response = await api.get<GamesProps>("/?api=game_day");
  return response.data;
}
async function getData() {
  const response = await api.get<GamesProps[]>("/?api=games");
  return response.data;
}


export default async function Home() {
  const data = await getImage()
 const dataImage = await getData();
  return (
    <main className="w-full ">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo para você.</h1>
         <Link href={`/game/${data.id}`} >
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2 ">
                <p className="text-white font-bold text-xl">{data.title}</p>
                <BsArrowRightSquare size={24} color="#fff"/>
              </div>
              <Image
                src={data.image_url}
                alt={data.title}
                priority
                quality={100}
                fill
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-1000 "
                sizes="(max-width:768px) 100vw, (max-width:1200px) 44vw "
              />
            </div>
          </section>
        </Link>
       <Input/>
       <h2 className="text-black font-bold text-xl m-4">Jogos para conhecer</h2>
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
          dataImage.map((data)=>(
              <GameCard key={data.id} data={data}/>
            ))
          }
        </section>
        
      </Container>
    </main>
  );
}

