"use client"
import React from 'react'
import {
    LuLayoutDashboard,
    LuUsers
} from "react-icons/lu";
import icon from "/icon.svg";
import Image from 'next/image';
import Link from 'next/link';

const SideBar = () => {
    return (
        <div className='w-16 h-[95vh] bg-[#fff] pt-10 px-3'>
            <LuLayoutDashboard color="#013C61" size={30} className='my-5' />
            <Link href="/employees" className='my-5'>
                <LuUsers color="#013C61" size={30} />
            </Link>
            <Image
                src={"icon.svg"}
                alt='icon'
                width={40}
                height={40}
                className='py-5 text-[#013C61]'
            />
        </div>
    )
}

export default SideBar
