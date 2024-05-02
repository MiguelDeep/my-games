"use client"
import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";


export default function CardAdd() {
  const [input,setInput] = useState("")
  const [text,setText] = useState("")

  function sendText(){
   if(input.length!==0){
    setText(input)
    setInput("")
   }
  }
  


  return (
    <div className='w-[409px] h-[184px] bg-blue-950 rounded-lg'>
     <div className='flex'>
     <button onClick={sendText}><GoPlus size={30} color='#fff' className='m-4 flex-shrink-0'/></button>
      <input value={input} onChange={(event)=> setInput(event.target.value)} type="text" placeholder={"Adicione uma jogo..."} className='text-white outline-none bg-transparent h-8 w-full mt-4 mr-2 placeholder:text-white' />
     </div>
     <div className='text-center'>
     <p className='text-white'>{text}</p>
     </div>
    </div>
  )
}
