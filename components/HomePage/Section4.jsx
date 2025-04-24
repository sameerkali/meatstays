"use client"
import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { PlayCircleIcon } from '@heroicons/react/24/solid'

function Section4() {
    const [show, setShow] = useState(false);

    return (
        <>


            <div className="bg-gray-300/50 dark:bg-gray-100/5 md:grid grid-cols-3 md:p-20 py-12 bg-blur overflow-x-hidden">
                <div className="col-span-1 m-auto">
                    <div className="relative h-fit">
                        <img className='mx-auto w-[90%] md:w-full' src='/home/p2.png' />
                        <PlayCircleIcon onClick={() => setShow(!show)} className='absolute top-[45%] right-[45%] h-[4rem] w-[4rem] text-white cursor-pointer' />
                    </div>
                </div>
                <div className="col-span-2 max-md:mt-6 px-5 md:px-16">
                    <div className="text-3xl text-red-600 mb-5 font-[900]">
                        Why Choose Us?
                    </div>
                    <div className="text-sm font-[400]">
                        At our meat shop, we offer high-quality meats with
                        a wide range of options to choose from. Our meats are fresh,
                        nutritious, and are delivered right to your doorstep.
                        Trust us to provide you with the best quality meats and
                        the convenience of delivery services. Come and experience the
                        difference in taste and quality with our meats today!
                        <br />
                        <br />
                        Delicious and nutritious meats delivered to your door.
                        Experience the difference with our fresh Himalayan goat meat,
                        and poultry. Shop now and enjoy the convenience
                        of doorstep delivery.

                        <ul className='mt-5 text-sm list-disc px-4'>
                            <li>FRESH MEATS</li>
                            <li>HIGH CALORIES</li>
                            <li>DOORSTEP DELIVERY</li>
                            <li>BUDGET FRIENDLY SHOP</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className={`fixed top-0 left-0 h-[100vh] w-[100vw] bg-green-200 opacity-50 z-[100000] ${show ? "block" : "hidden"} `} onClick={() => setShow(!show)}></div>
            <div className={`fixed z-[100000] top-[30%] md:top-[10%] sm:top-[25%] md:right-[12%] sm:right-[8%] right-3 ${show ? "block" : "hidden"} w-11/12 md:w-[75%] sm:w-[85%]`}>
                <VideoPlayer show={show} setShow={setShow} src="/home/Bakrawvideo.mp4" />
            </div>
        </>
    )
}

export default Section4