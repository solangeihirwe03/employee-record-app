"use client"
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-white w-full h-16 flex items-center'>
        <Image
        src={"/logo.png"}
        alt='Logo'
        width={100}
        height={100}
        />
    </div>
  )
}

export default Header
