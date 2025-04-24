import React from 'react'
import Link from 'next/link';
import Image from 'next/image'


const products = [
    {
        src: "/productsHome/1.png",
        title: "BAKRAW Specially cutted meat",
        link: '/products?tab=goat'
    },
    {
        src: "/productsHome/2.jpg",
        title: "BAKRAW Himalyan meat",
        link: '/products?tab=goat'
    },
    {
        src: "/productsHome/3.jpg",
        title: "BAKRAW FRESH MEATS",
        link: '/products?tab=goat'
    },
    {
        src: "/productsHome/4.jpg",
        title: "BAKRAW Full leg Himalayan meat",
        link: '/products?tab=goat'
    },
];

function Section2() {

    return (
        <div className="bg-red-600 py-3 lg:py-6 px-3 lg:px-20 mt-4 lg:mt-8 mb-5">

            <div className="flex justify-between items-center gap-3 mb-3">
                <h2 className="text-xl md:text-2xl text-white dark:text-white tracking-wide uppercase font-[600]">
                    Products
                </h2>

                <Link href="/products" className="tracking-wide text-sm border-2 border-white text-white dark:border-black hover:bg-white hover:text-red-600 duration-200 cursor-pointer dark:text-black dark:hover:text-white dark:hover:bg-black px-3 md:px-8 py-1 rounded-lg font-bold">
                    View All
                </Link>
            </div>

            {/* desktop */}
            <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-6 mt-8 mb-4">
                <div className="row-span-2 rounded-lg">
                    <div className="relative h-full w-full group">
                        <Image src={products[2].src} fill={true} className="object-cover rounded-lg" />
                        <div className="absolute h-full w-full top-0 left-0  bg-gradient-to-t from-black/50 flex justify-center items-end overflow-hidden rounded-lg">
                            <p className="pb-3 font-[500] tracking-wider text-white group-hover:translate-y-[-3rem] duration-300">
                                {products[2].title}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg" >
                    <div className="relative h-[250px] w-full group">
                        <Image src={products[0].src} fill={true} className="object-cover rounded-lg" />
                        <div className="absolute h-full w-full top-0 left-0  bg-gradient-to-t from-black/50 flex justify-center items-end overflow-hidden rounded-lg">
                            <p className="pb-3 font-[500] tracking-wider text-white group-hover:translate-y-[-3rem] duration-300">
                                {products[0].title}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg">
                    <div className="relative h-[250px] w-full group">
                        <Image src={products[1].src} fill={true} className="object-cover rounded-lg" />
                        <div className="absolute h-full w-full top-0 left-0  bg-gradient-to-t from-black/50 flex justify-center items-end overflow-hidden rounded-lg">
                            <p className="pb-3 font-[500] tracking-wider text-white group-hover:translate-y-[-3rem] duration-300">
                                {products[1].title}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 col-start-2 rounded-lg">
                    <div className="relative h-[250px] w-full group">
                        <Image src={products[3].src} fill={true} className="object-cover rounded-lg" />
                        <div className="absolute h-full w-full top-0 left-0  bg-gradient-to-t from-black/50 flex justify-center items-end overflow-hidden rounded-lg">
                            <p className="pb-3 font-[500] tracking-wider text-white group-hover:translate-y-[-3rem] duration-300">
                                {products[3].title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="block md:hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4  mt-6">
                    {
                        products.map((item, i) => (
                            <div key={i}>
                                <div className="relative h-[250px] w-[93vw] md:w-[400px] group my-4" >
                                    <Image src={item.src} fill={true} className="object-cover rounded-lg" />
                                    <div className="absolute h-full w-full top-0 left-0  bg-gradient-to-t from-black/50 flex justify-center items-end overflow-hidden rounded-lg">
                                        <p className="pb-3 font-[500] tracking-wider text-white group-hover:translate-y-[-3rem] duration-300">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Section2