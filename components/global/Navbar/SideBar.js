'use client'
import React from 'react'
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { HomeIcon } from '@heroicons/react/24/solid';
import { TagIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { logoutUser } from '@/lib/actions/UserActions/UserActions'

const desktop_nav_options = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/products',
        title: 'Shop',
    },
    {
        path: '/contactus',
        title: 'Contact Us',
    },
]

function SideBar(props) {
    const router = useRouter()
    const handleLogout = async () => {
        const res = await logoutUser();
        if (res) {
            // router.push('/login-user');
            if (typeof window !== 'undefined') {
                window.location.reload();
            }
        }
    }
    return (
        <div className={`w-3/4 z-[99] h-screen fixed top-0 left-0 bg-red-600 transition-transform duration-500 transform ${props.sideBar ? 'translate-x-0' : '-translate-x-[100%]'}`}>
            <XMarkIcon className='w-7 h-7 cursor-pointer text-white absolute right-2 top-2' onClick={() => props.setSideBar(sideBar => !sideBar)} />
            <div className='h-screen flex flex-col justify-start items-start mt-5 gap-5 text-white px-4'>

                <Link href='/' className="flex gap-1 lg:gap-2 justify-center items-center lg:mt-3">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width="140"
                        height="140"
                        className="lg:block hidden"
                    />
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width="80"
                        height="80"
                        className="lg:hidden block"
                    />
                    <div>
                        <h1 className="text-xl lg:text-3xl font-[900] logo_name ">
                            Meat Says
                        </h1>
                        <p className=" text-xs lg:text-sm">
                            An Initiative of Government of Uttarakhand
                        </p>
                    </div>
                </Link>

                {
                    desktop_nav_options?.map((item, i) => (
                        <div className="py-1 relative" key={i}>
                            <Link href={item?.path} className="font-[400]">{item?.title}</Link>

                            
                        </div>
                    ))
                }

                {
                    props.userToken &&
                    <div className="py-1">
                        <Link href={'/orders'} className="font-[400]">Orders</Link>

                    </div>
                }

                <div className="py-1">
                    <Link href="/express" className="font-[600] border border-white rounded-full uppercase px-3 py-1.5 duration-200 text-white bg-red-800">
                        MeatSays
                        {" "}
                        <span className="text-red-300 animate-pulse">Express</span>
                    </Link>
                </div>


                {/* Login Signup / logout Button */}
                {
                    props.userToken ?
                        <>
                            <button className="cursor-pointer px-3 py-1 border border-red-900 hover:border-white bg-red-900 hover:bg-transparent text-white rounded-3xl duration-200"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </>
                        :
                        <>
                            <Link href="/login-user" className="px-3 cursor-pointer py-1 border border-white bg-transaprent hover:bg-none  text-white hover:bg-red-900 rounded-3xl duration-200">
                                Login
                            </Link>

                            <Link href="/register-user" className="cursor-pointer px-3 py-1 border border-red-900 hover:border-white bg-red-900 hover:bg-transparent text-white rounded-3xl duration-200">
                                Register
                            </Link>

                        </>
                }

            </div>
        </div>
    )
}

export default SideBar