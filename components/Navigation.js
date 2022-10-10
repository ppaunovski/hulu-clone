import React from 'react'
import requests from "../utils/requests"
import {useRouter} from "next/router"

function Navigation() {
    const router = useRouter()
  return (
    <nav className='relative'>
        <div className='flex space-x-5 sm:space-x-10 flex-nowrap whitespace-nowrap overflow-x-scroll px-5 sm:px-10  text-lg scrollbar-hide'>
        {Object.entries(requests).map(([key, {title, url}]) => {
            return(
                <h2 key={key} onClick={() => {
                    router.push(`/?genre=${key}`)
                }} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
            )
            
        })}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12' />
    </nav>
  )
}

export default Navigation