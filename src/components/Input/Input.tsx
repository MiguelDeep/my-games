"use client"
import React, { EventHandler, FormEvent } from 'react'
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import { useRouter } from "next/navigation"

type InputPrps = {
  text : string
}

export default function Input() {
  const [input, setInput] = useState("")
  const router = useRouter()


  function handleSearch(event: FormEvent) {

    event.preventDefault()

    if (input === "") return
    router.push(`/game/search/${input}`)

  }
  return (
    <form className='flex w-full bg-slate-300 rounded-lg justify-between my-5' onSubmit={handleSearch}>
      <input
        type='text'
        className='outline-0 flex h-9  bg-transparent w-full placeholder:text-black p-6'
        placeholder='Está procurando algum jogo?'
        value={input}
        onChange={(event) => setInput(event.target.value)}

      />
      <button type='submit' className='mr-4'> <FaSearch size={24} color='#ea580c' /></button>
    </form>
  )
}
