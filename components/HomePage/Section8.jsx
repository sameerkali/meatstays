"use client"
import React from 'react'
import Link from 'next/link';
import { Carousel } from 'primereact/carousel';
import dynamic from 'next/dynamic'
const Section8ProductCard = dynamic(() => import('./Section8ProductCard'), { ssr: false })

const products=[
  {
    _id: 100,
    name: 'Rahu Curry Cut',
    price: "220",
    images: ['https://www.bigbasket.com/media/uploads/p/m/20000963_3-fresho-rohu-fish-large-curry-cutbengali-cut-preservative-free.jpg?tr=w-1920,q=80'],
    quantity: "1000gm",
    category: {
      category: 'Curry Cut',
      brand: 'Uttarafish',
    },
    inStock: true,
  },
  {
    _id: 101,
    name: 'Mutton Mince with Bones',
    price: "649",
    images: ['https://www.bigbasket.com/media/uploads/p/m/40227627_1-fresho-mutton-lamb-mince-fresh-tender.jpg?tr=w-1920,q=80'],
    quantity: "1000gm",
    category: {
      category: 'Best',
      brand: 'Bakraw',
    },
    inStock: true,
  },
  {
    _id: 102,
    name: 'Chicken Whole',
    price: "249",
    images: ['https://www.bigbasket.com/media/uploads/p/m/40202514_1-fresho-jhatka-tandoori-chicken-without-skin.jpg?tr=w-1920,q=80'],
    quantity: "1000gm",
    category: {
      category: 'Whole',
      brand: 'Chick Fresh ',
    },
    inStock: true,
  },
  {
    _id: 103,
    name: 'Chicken Wings',
    price: "280",
    images: ['https://www.bigbasket.com/media/uploads/p/m/40192505_2-fresho-chicken-wings-antibiotic-residue-free.jpg?tr=w-1920,q=80'],
    quantity: "1000gm",
    category: {
      category: 'Best',
      brand: 'Chick Fresh',
    },
    inStock: true,
  },
  {
    _id: 104,
    name: 'Mutton Curry Cut',
    price: "800",
    images: ['https://www.bigbasket.com/media/uploads/p/m/20003676_4-fresho-mutton-boneless-antibiotic-residue-free-growth-hormone-free.jpg?tr=w-1920,q=80'],
    quantity: "1000gm",
    category: {
      category: 'Best',
      brand: 'Bakraw',
    },
    inStock: true,
  },
];

const Section8 = () => {

  const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

  return (
    <div className='py-3 lg:py-6 px-2 lg:px-20 mt-12 lg:mt-20 mb-5'>

      <div className="flex justify-between flex-wrap items-center gap-3 mb-1 md:mb-3">
        <h2 className="text-xl md:text-2xl text-red-600 tracking-wide uppercase font-[600]">
          Products Of Cooperative
        </h2>

        <Link href="/products" className="tracking-wide hidden md:block text-sm border-2 border-red-600 text-red-600  hover:bg-red-600 hover:text-white duration-200 cursor-pointer  px-3 md:px-8 py-1 rounded-lg font-bold">
          View All
        </Link>
      </div>

      <div className="flex justify-end items-end">
        <Link href="/products" className="tracking-wide md:hidden text-sm border-2 border-red-600 text-red-600  hover:bg-red-600 hover:text-white duration-200 cursor-pointer  px-3 md:px-8 py-1 rounded-lg font-bold">
          View All
        </Link>
      </div>

      <div className="mt-3 md:mt-5">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={Section8ProductCard} />
        </div>

    </div>
  )
}

export default Section8
