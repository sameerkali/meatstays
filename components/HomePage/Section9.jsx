import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";


const products = [
    {
        src: "https://res.cloudinary.com/dbf8cjnld/image/upload/v1711910095/MeatSays_Images_production/cfelp91pt06mq0rihn9o.jpg",
        title: " MEAT SAYS",
        desc: 'IT PARK',
        mapLink: "https://maps.app.goo.gl/UY67inecuCjwfcty9?g_st=aw"
    },
    
    {
        src: "https://res.cloudinary.com/dbf8cjnld/image/upload/v1711910095/MeatSays_Images_production/q0puygbneoahifqd7fod.jpg",
        title: " MEAT SAYS",
        desc: 'Prem nagar',
         mapLink: "https://maps.app.goo.gl/JnUHo5F1gr2G5FaF8?g_st=aw"
    },
    {
        src: "https://res.cloudinary.com/dbf8cjnld/image/upload/v1745232844/MeatSays_Images_production/bqoj5wg3rnlbbycxv67x.jpg",
        title: " MEAT SAYS",
        desc: 'Jakhan',
        mapLink: "https://maps.app.goo.gl/UY67inecuCjwfcty9?g_st=aw"

    },
    // {
    //     src: "https://res.cloudinary.com/dbf8cjnld/image/upload/v1711733865/MeatSays_Images_production/ucsgdnqu67jlxspkpadg.jpg",
    //     title: "Aenean habitasse",
    //     desc: 'Riyadh, Saudi Arabia',
    // },
    // {
    //     src: "https://res.cloudinary.com/dbf8cjnld/image/upload/v1711910095/MeatSays_Images_production/hwi9v8ngxpvlmgezppjp.jpg",
    //     title: "Aenean Tempus ipsum",
    //     desc: 'Riyadh, Saudi Arabia',
    // },
    // {
    //     src: "https://res.cloudinary.com/dbf8cjnld/image/upload/v1711910095/MeatSays_Images_production/vaxbbl8wrylz9mbuiyve.jpg",
    //     title: "Aenean habitasse",
    //     desc: 'Riyadh, Saudi Arabia',
    // },
];

function Section9() {

    return (
        <div className="dark:bg-gray-800 bg-white py-3 lg:py-6 px-3 lg:px-20 mb-5">

            <div className="flex justify-between items-center gap-3 mb-3">
                <h2 className="text-xl md:text-2xl text-red-600 dark:text-white tracking-wide uppercase font-[600]">
                    Our Shop
                </h2>
            </div>

            <div className="">

                <div className="w-full border border-gray-300 dark:bg-red-600 shadow-md  flex flex-col md:flex-row justify-center items-center p-3 rounded-lg my-8 gap-5 md:gap-10">
                    <div className="relative h-[300px] w-full overflow-hidden md:flex-[40%]">
                        <Image
                            src="https://res.cloudinary.com/dbf8cjnld/image/upload/v1711910095/MeatSays_Images_production/drfc65jnflm2azni37ki.jpg"
                            fill={true}
                            alt="services"
                            className="rounded-lg object-cover"
                        />
                    </div>

                    <div className="p-2 md:p-5 flex-[60%]">
                        <p className="text-sm font-[400] mb-5">
                            Welcome to Meat says, a distinguished joint venture company proudly showcasing the premier brands of Uttarakhand. Our esteemed selection includes Bakraw Mutton, known for its tender texture and exquisite taste, alongside Uttarafish, offering freshness straight from Uttarakhand&apos;s pristine waters. Indulge in the superior quality of Himala Chicken, renowned for its succulence and rich flavor, and savor the freshness of Chick Fresh poultry products. Visit us at Meatsays Shop, located in the heart of Uttarahaat, near IT Park, on Sahastradhara Road, Dehra Dun, India 248001. Discover a world of culinary excellence where tradition meets innovation, and every dish tells a story of unparalleled quality and taste.
                        </p>
                    </div>
                </div>
            </div>

            {/* desktop */}

            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4  mt-8 w-full">
                    {
                        products.map((item, i) => (
                            <div key={i} className="w-[95vw] md:w-[350px] lg:w-[380px] xl:w-[420px] overflow-hidden">
                                <div className="relative h-[250px] w-[93vw] md:w-[320px] lg:w-[360px] xl:w-[400px] group my-4" >
                                    <Image src={item.src} fill={true} className="object-cover rounded-lg" />
                                    {/* <div className="absolute h-full w-full top-0 left-0  bg-gradient-to-t from-black/50 flex justify-end flex-col items-center rounded-lg">
                                        <p className="pb-2 font-[500] tracking-wider text-white group-hover:translate-y-[-3rem] duration-300">
                                            {item.title}
                                        </p>
                                        <p className="pb-3 font-[400] text-white group-hover:translate-y-[-3rem] duration-300 flex">
                                            <FaLocationDot className="mr-1 text-lg" />
                                            {item.desc}
                                        </p>
                                    </div> */}
                                </div>
                                <div className="mt-2 px-1 flex flex-col items-start">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-2 flex items-center"><FaLocationDot className="mr-1 text-red-500" /> {item.desc}</p>
        <a 
            href={item.mapLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline text-sm"
        >
            View on Google Maps
        </a>
    </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Section9