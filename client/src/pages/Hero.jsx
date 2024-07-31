import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import book from "../assests/book.png"
import { Mail } from "lucide-react"

export default function Hero() {
  return (
    <div className="w-full h-screen container p-10 flex flex-row justify-center items-center gap-20">
      {/* left-side */}
      <div className='w-full flex flex-col gap-8 md:w-1/2'>
        <h1 className='capitalize text-3xl font-bold'>
          hello, welcome to{' '}
          <span className='bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent'>
            learnifystore.
          </span>
        </h1>
        <p className='capitalize'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          voluptate eligendi nostrum in pariatur voluptatem, voluptas mollitia
          sed aliquid doloribus ullam culpa dolores nulla assumenda eius illum
          velit deserunt ut?
        </p>
        <div className="flex items-center">
          <Input placeholder="Email" className="flex-grow"/>
        </div>
        <Button className="bg-blue-700 text-white w-36 uppercase space-x-2">
          <Mail className="mr-2 h-4 w-4" />Subscribe
        </Button>
      </div>
      {/* right-side */}
      <div className='w-full md:w-1/2'>
        <img
          src={book}
          alt="learnify store img"
          className='h-96 w-11/12 object-cover'
        />
      </div>
    </div>
  )
}
