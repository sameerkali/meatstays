import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";


const products = [
  {
    src: "/branchesHome/1.png",
    title: "Aenean habitasse",
    desc: 'Riyadh, Saudi Arabia',
  },
  {
    src: "/branchesHome/2.png",
    title: "Aenean Tempus ipsum",
    desc: 'Riyadh, Saudi Arabia',
  },
  {
    src: "/branchesHome/3.png",
    title: "Aenean habitasse",
    desc: 'Riyadh, Saudi Arabia',
  },
  {
    src: "/branchesHome/4.png",
    title: "Aenean habitasse",
    desc: 'Riyadh, Saudi Arabia',
  },
  {
    src: "/branchesHome/5.png",
    title: "Aenean Tempus ipsum",
    desc: 'Riyadh, Saudi Arabia',
  },
  {
    src: "/branchesHome/6.png",
    title: "Aenean habitasse",
    desc: 'Riyadh, Saudi Arabia',
  },
];

function Section5() {

  return (
    <div className="dark:bg-gray-800 bg-white py-3 lg:py-6 px-3 lg:px-20 mb-5">

      <div className="flex justify-between items-center gap-3 mb-3">
        <h2 className="text-xl md:text-2xl text-red-600 dark:text-white tracking-wide uppercase font-[600]">
          Branches
        </h2>
      </div>

{/* desktop */}

<div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4  mt-8 w-full">
      {
        products.map((item, i) => (
          <div key={i} className="w-[95vw] md:w-[350px] lg:w-[380px] xl:w-[420px] overflow-hidden">
          <div className="relative h-[250px] w-[93vw] md:w-[320px] lg:w-[360px] xl:w-[400px] group my-4" >
            <Image src={item.src} fill={true} className="object-cover rounded-lg" />
            <div className="absolute h-full w-full top-0 left-0  bg-gradient-to-t from-black/50 flex justify-end flex-col items-center rounded-lg">
              <p className="pb-2 font-[500] tracking-wider text-white group-hover:translate-y-[-3rem] duration-300">
                {item.title}
              </p>
              <p className="pb-3 font-[400] text-white group-hover:translate-y-[-3rem] duration-300 flex">
                <FaLocationDot className="mr-1 text-lg" />
                {item.desc}
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

export default Section5