'use client'
import Link from 'next/link'
import React from 'react'
import CartIcon from './CartIcon'
import SideBar from './SideBar';
import { FaBars } from "react-icons/fa6";
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { logoutUser } from '@/lib/actions/UserActions/UserActions'

function Header(props) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const headerRef = React.useRef();
    const [sideBar, setSideBar] = React.useState(false);
    const [userToken, setUserToken] = React.useState(props.usertoken);

    React.useEffect(() => {
        setUserToken(props.usertoken);
    }, [props])

    const router = useRouter();
    const [showbg, setShowbg] = React.useState(false);
    const handleScrollBehaviour = () => {
        if (window.scrollY >= 100) {
            setShowbg(true);
        } else {
            setShowbg(false);
        }
    }

    React.useEffect(() => {
        setMounted(true);
    }, [])

    React.useEffect(() => {
        mounted && window.addEventListener("scroll", handleScrollBehaviour);
    })

    React.useEffect(() => {
        handleScrollBehaviour();
    }, [resolvedTheme])


    const desktop_nav_options = [
        {
            path: '/express',
            title: 'MeatSays Express',
        },
        {
            path: '/',
            title: 'Home',
        }, 
        {
            path: '/products',
            title: 'Shop',
        },
        {
            path: '/cart',
            title: 'Cart',
        },
        {
            path: '/contactus',
            title: 'Contact Us',
        },
    ]

    const handleLogout = async( ) => {
        const res = await logoutUser();
        if(res){
            // router.push('/login-user');
            if (typeof window !== 'undefined') {
                window.location.reload();
            }
        }
    }

    return (
        // desktop navbar
        mounted ?
            <div className='fixed w-full top-0 z-[10000]' ref={headerRef}>

                <div className={`z-[10000] w-full flex justify-between items-center lg:items-start px-2 lg:px-6 py-1 lg:py-3 text-white ${showbg ? "bg-red-600" : "max-lg:bg-red-600 bg-transparent"} duration-200 transition-all`}>
                    <Link href='/' className="flex gap-1 lg:gap-2 justify-center items-center lg:mt-3">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={showbg ? "80" : "140"}
                            height={showbg ? "80" : "140"}
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
                            <p className=" text-[10px] lg:text-sm">
                                An Initiative of Government of Uttarakhand
                            </p>
                        </div>
                    </Link>

                    <div className="lg:flex gap-4 mt-8 hidden">

                        {
                            desktop_nav_options?.map((item, i) => (
                                <div className="py-1" key={i}>
                                    {
                                        item?.path === '/express' ?
                                        <Link href={item?.path} className="font-[600] border border-white rounded-full uppercase px-3 mx-1 py-1.5 duration-200 text-white bg-red-800">
                                            MeatSays 
                                            {" "}
                                            <span className="text-red-300 animate-pulse">Express</span>
                                        </Link>
                                        :
                                        <div className="relative group">
                                            <Link href={item?.path} className="font-[500] relative hover:font-[600] duration-200 text-white">{item?.title}</Link>

                                            {
                                        item?.path === '/products' &&
                                        <div className="absolute hidden group-hover:flex flex-col top-6 left-0 min-w-[8rem] min-h-8 bg-white rounded-sm px-4 py-3">

                                            <Link href='/products?brand=top_selling' className="font-[500] relative hover:font-[600] duration-200 text-black text-sm border-b border-gray-300 pb-1.5 pt-1">
                                                Top Selling
                                            </Link>

                                            <Link href='/products?brand=bakraw' className="font-[500] relative hover:font-[600] duration-200 text-black text-sm border-b border-gray-300 pb-1.5 pt-1">
                                                Bakraw mutton
                                            </Link>

                                            <Link href='/products?brand=uttarafish' className="font-[500] relative hover:font-[600] duration-200 text-black text-sm border-b border-gray-300 pb-1.5 pt-1">
                                                Uttara Fish - Fish
                                            </Link>

                                            <Link href='/products?brand=himala_chicken' className="font-[500] relative hover:font-[600] duration-200 text-black text-sm border-b border-gray-300 pb-1.5 pt-1">
                                                 Himala Desi Chicken
                                            </Link>

                                            <Link href='/products?brand=chick_fresh' className="font-[500] relative hover:font-[600] duration-200 text-black text-sm border-b border-gray-300 pb-1.5 pt-1">
                                                Chick Fresh Chicken
                                            </Link>
                                        </div>
                                    }
                                        </div>
                                    } 
                                </div>
                            ))
                        }

                        {
                            userToken &&
                            <div className="py-1">
                                {
                                    router.pathname === '/orders' ?
                                        <Link href={'/orders'} className="font-[600] text-white">Orders</Link>
                                        :
                                        <Link href={'/orders'} className="font-[400] text-slate-200">Orders</Link>
                                }
                            </div>
                        }

                        {/* Login Signup / logout Button */}
                        {
                            userToken ?
                                <>
                                    <Link className="ml-2 lg:ml-12" href="/cart"><CartIcon cartItems={props.cartItems} /></Link>
                                    <button className="cursor-pointer px-3 py-1 border border-red-900 hover:border-white bg-red-900 hover:bg-transparent text-white rounded-3xl duration-200"
                                    onClick={handleLogout}
                                    >
                                        Logout
                                    </button>

                                </>
                                :
                                <>
                                    <Link href="/login-user" className="ml-2 lg:ml-12 px-3 cursor-pointer py-1 border border-white bg-transaprent hover:bg-none  text-white hover:bg-red-900 rounded-3xl duration-200">
                                        Login
                                    </Link>

                                    <Link href="/register-user" className="cursor-pointer px-3 py-1 border border-red-900 hover:border-white bg-red-900 hover:bg-transparent text-white rounded-3xl duration-200">
                                        Register
                                    </Link>

                                </>
                        }



                    </div>

                    {/* mobile section */}
                    <div className="flex gap-3 lg:hidden mr-2 items-center">
                        <div>
                            <Link href="/cart"><CartIcon cartItems={props.cartItems} /></Link>
                        </div>
                        <FaBars className='text-xl text-white cursor-pointer' onClick={() => setSideBar(sideBar => !sideBar)} />
                    </div>

                </div>
                <SideBar setSideBar={setSideBar} sideBar={sideBar} userToken={userToken} />
            </div>
            :
            <>
            </>
    )
}

export default Header