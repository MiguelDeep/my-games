import React, { Component, ComponentElement, ComponentProps } from 'react'


interface Span extends ComponentProps<'span'>{

}
export default function index({...props}:Span) {
  return (
   <span {...props} className='flex bg-gray-400 rounded-md text-black p-2 ' />
  )
}
