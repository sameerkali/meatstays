"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const srevicesCards = [
    { src: "/servicesHome/1.jpg", href: "/", title: "FRESH HIMALAYAN MEAT", desc: "Our meat shop offers fresh Himalayan goat meat sourced from goats raised in the Himalayan region. Our goats are allowed to graze freely and feed on natural vegetation, resulting in lean and healthy meat with a unique flavor and aroma. We prioritize food safety and hygiene to provide our customers with the best possible products and service. Come to our shop for delicious and high-quality meat." },
    { src: "/servicesHome/2.jpeg", href: "/", title: "GET MEAT DELIVERED TO YOUR DOORS", desc: "We offer delivery services to bring our high-quality meats, including fresh Himalayan goat meat, directly to your doorstep. Our delivery services are prompt and reliable, ensuring that your meat arrives fresh and delicious. Place your order today and enjoy the convenience and quality of our delivery services." },
    { src: "/servicesHome/3.jpg", href: "/", title: "WIDE RANGES OF MEAT", desc: "Discover a world of high-quality meats at our shop! From fresh Himalayan goat meat to poultry, we offer a wide range of meats to satisfy all of your culinary needs. Our knowledgeable staff and commitment to food safety ensure a delicious and safe meat shopping experience. Visit us today and elevate your meals with our delicious meats!" },
];

function Section3() {
    return (
        <div className='py-3 lg:py-12 px-3 lg:px-20  my-4'>
            <div className="flex justify-between items-center gap-3 mb-3">
                <h2 className="text-xl md:text-2xl text-red-600  tracking-wide uppercase font-[600]">
                    Services
                </h2>
            </div>
            <div className="">

                    <div className="w-full border border-gray-300 dark:bg-red-600 shadow-md bg-gray-200 flex flex-col md:flex-row justify-center items-center p-3 rounded-lg my-8 gap-5 md:gap-10">
                        <div className="relative h-[300px] w-full overflow-hidden md:flex-[40%]">
                             <Image 
                            src={srevicesCards[0].src}
                           fill={true}
                            alt="services"
                            className="rounded-lg object-cover"
                        />
                        </div>
                       
                        <div className="p-2 md:p-5 flex-[60%]">
                            <h2 className="text-xl uppercase font-[600] tracking-wide mb-2">
                            {srevicesCards[0].title}
                            </h2>
                            <p className="text-sm  font-[400] mb-5">
                            {srevicesCards[0].desc}
                            </p>
                            <Link
                                className="px-8 py-1.5 border border-gray-300 rounded-lg tracking-wider uppercase font-[400] text-gray-600
                                dark:text-white"
                             href={srevicesCards[0].href}>
                             Learn More
                            </Link>
                        </div>
                    </div>


                    <div className="w-full border border-gray-300 dark:bg-red-600 shadow-md bg-gray-200 flex flex-col md:flex-row-reverse justify-center items-center p-3 rounded-lg my-8 gap-5 md:gap-10">
                         {/* <div className="relative h-[300px] w-full overflow-hidden md:flex-[40%]"> */}
                         {/* <div className="relative h-[300px] w-[300px] rounded-lg overflow-hidden"> */}
                         <div className="relative w-full max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden">


                         <Image 
  src={srevicesCards[1].src}
  fill={true}
  alt="services"
  className="rounded-lg object-contain object-center"
/>

                        </div>






                        
                        <div className="p-2 md:p-5 flex-[60%]">
                            <h2 className="text-xl upperse font-[600] tracking-wide mb-2">
                            {srevicesCards[1].title}
                            </h2>
                            <p className="text-sm upperse font-[400] mb-5">
                            {srevicesCards[1].desc}
                            </p>
                            <Link
                                className="px-8 py-1.5 border border-gray-300 rounded-lg tracking-wider uppercase font-[400] text-gray-600
                                dark:text-white"
                             href={srevicesCards[1].href}>
                             Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="w-full border border-gray-300 dark:bg-red-600 shadow-md bg-gray-200 flex flex-col md:flex-row justify-center items-center p-3 rounded-lg my-8 gap-5 md:gap-10">
                         <div className="relative h-[300px] w-full overflow-hidden md:flex-[40%]">
                             <Image 
                            src={srevicesCards[2].src}
                           fill={true}
                            alt="services"
                            className="rounded-lg object-cover"
                        />
                        </div>
                        <div className="p-2 md:p-5 flex-[60%]">
                            <h2 className="text-xl upperse font-[600] tracking-wide mb-2">
                            {srevicesCards[2].title}
                            </h2>
                            <p className="text-sm upperse font-[400] mb-5">
                            {srevicesCards[2].desc}
                            </p>
                            <Link
                                className="px-8 py-1.5 border border-gray-300 rounded-lg tracking-wider uppercase font-[400] text-gray-600
                                dark:text-white"
                             href={srevicesCards[2].href}>
                             Learn More
                            </Link>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Section3