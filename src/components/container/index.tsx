import React from 'react'

export default function Container({children}:{children:React.ReactNode}) {
  return (
    <div className='max-w-screen-xl m-auto px-4'>{children}</div>
  )
}
