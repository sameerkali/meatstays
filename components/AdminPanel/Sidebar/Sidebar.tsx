'use client'
import React, { useState } from 'react'
import './Sidebar.css'
import Link from 'next/link'
import { Roboto, Poppins } from 'next/font/google'
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserTie } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa";
import { GiBookPile } from "react-icons/gi";

const roboto = Roboto({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const data =[
    {
        link:'/en/admin/dashboard',
        name:"Home",
        icon: FaHome,
    },
    {
        link:'/en/admin/dashboard/category',
        name:"Category",
        icon: FaUserTie,
    },
    {
        link:'/en/admin/dashboard/images',
        name:"Upload Images",
        icon: FaHospitalUser,
    },
    {
        link:'/en/admin/dashboard/products',
        name:"Add Products",
        icon: FaBlogger,
    },
    {
        link:'/en/admin/dashboard/manage-products',
        name:"Manage Products",
        icon: FaBlogger,
    },
    {
        link:'/en/admin/dashboard/manage-users',
        name:"Manage Users",
        icon: FaUserTie,
    },
    {
        link:'/en/admin/dashboard/manage-orders',
        name:"Manage Orders",
        icon: GiBookPile,
    },
    {
        link: '/en/admin/dashboard/contacts',
        name: "Contact Messages",
        icon: FaHospitalUser,
    },
]

const Sidebar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={`${show ? "w-[15rem]" : "w-[3rem] justify-start items-center"} transition-all duration-500 h-screen bg-slate-800 overflow-auto overflow-x-hidden flex flex-col gap-3 py-4 px-4 sidebar ${poppins.className}`}>
            
            {
                show ?
                <div className="w-full text-white flex items-center justify-between mb-5">
                    <div className="flex items-center text-sm">
                        <MdOutlineDashboard className="text-white text-lg mr-2" /><p>Dashboard</p>
                    </div>
                    <div className="bg-white rounded-full w-fit cursor-pointer p-[2px] flex justify-center items-center" onClick={() => setShow(prev => !prev)}>
                        <IoIosArrowForward className="text-black text-lg rotate-180" />
                    </div>
                </div>
                :
                <div className="bg-white mb-5 rounded-full w-fit cursor-pointer p-[2px] flex justify-center items-center" onClick={() => setShow(prev => !prev)}>
                <IoIosArrowForward className="text-black text-lg" />
            </div>
            }

            {
                data.map((item,i) => (
                     <Link href={item.link} key={i} className="w-full text-white flex items-center justify-center mb-2">
                        {
                            show ? 
                            <div className="flex items-center w-full">
                        <item.icon className="text-white text-lg" />
                        <p className="ml-2 text-sm">{item.name}</p>
                        </div>
                        :
                        <div className="">
                        <item.icon className="text-white text-lg" />
                        </div>
                        }
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar