import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (

    <div className="px-4 lg:px-20 py-6 bg-red-600">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex gap-1 justify-center flex-col items-center">
            <Link href='/'>
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className=""
              />
            </Link>
            <div>
              <h1 className="text-xl text-white text-center font-[900] ">
                Meat Says
              </h1>
              <p className=" text-xs lg:text-sm text-white text-center">
                An Initiative of Government of Uttarakhand
              </p>
              <div className="flex gap-2 text-white text-xl mt-4 justify-center items-center">
                <Link
                  href="https://www.facebook.com/Meatsays"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://www.instagram.com/meatsays_?igsh=OTczYmVmd2lyanl4&utm_source=qr"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BiLogoInstagramAlt />
                </Link>

              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center text-white">
            <p className="text-lg font-medium">Products</p>

            <ul className="mt-5 space-y-2 text-white text-sm">
              <li>
                Uttara Fish - Fish
              </li>

              <li>
                Himala Desi Chicken
              </li>

              <li>
                Chick Fresh Chicken
              </li>

              <li>
                Bakraw mutton
              </li>

              <li>
                Eggs
              </li>

              <li>
                kababs
              </li>

              <li>
                Salami and sausages
              </li>

              <li>
                MeatSays Express - Coming Soon
              </li>

            </ul> 
          </div>
        </div>

        <div>
          <div className="text-center  text-white">
            <p className="text-lg font-medium ">Services</p>

            <ul className="mt-5 space-y-2 text-white text-sm">
              <li>
                franchisee
              </li>
              <li>
                Meat shops
              </li>
              <li>
                Future plans
              </li>

            </ul>
          </div>
        </div>

        <div>
          <div className="text-center text-white">
            <p className="text-lg font-medium">Contact information</p>

            <ul className="mt-5 space-y-2 text-white text-sm">
              <li>
                Meatsays Shop, Uttarahaat, Near IT Park,<br /> Sahastradhara Road, Dehra Dun,
                <br /> Uttarakhand, India 
              </li>

              <li>
                <Link href="tel:+918869810002">
                  Phone: +91 8869810002 
                </Link>
              </li>

              <li>
                <Link href="mailto:info@meatsays.com">
                  Email: info@meatsays.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-2 mt-8 pt-20 pb-5">
        <p className="text-white text-sm">
          Copyright © 2024 | All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
