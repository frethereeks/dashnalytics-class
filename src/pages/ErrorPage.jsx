import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
      <main className='grid place-items-center min-h-screen w-full bg-primary'>
          <aside className="bg-white rounded-md w-full max-w-md flex flex-col gap-3 p-6 text-center text-dark shadow-lg mx-auto">
              <h2 className="font-extrabold font-serif text-6xl md:text-8xl">404</h2>
              <p className="font-medium text-dark text-lg md:text-2xl p-2 my-2 w-max mx-auto border-y border-dotted border-dark/30">Page NOT Found</p>
              <Link to={"/"} className='text-base md:text-lg flex gap-2 items-center hover:underline p-1 justify-center'><IoChevronBackOutline /> Back to Dashboard</Link>
          </aside>
    </main>
  )
}
