"use client"
import React from 'react';
import './Section1.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function Section1() {

    let images = [
        {
            src: '/home/Section1/1.jpeg',
        },
        {
            src: '/home/Section1/2.jpeg',
        },
        {
            src: '/home/Section1/3.jpeg',
        },
        {
            src: '/home/Section1/4.jpeg',
        },
    ];

    return (
        // <div className='bg-[url("/login/bg_light.png")] bg-cover bg-no-repeat w-full min-h-[100vh]  text-white dark:text-black'>

        //     <div className="flex flex-col max-lg:pt-[6rem] lg:flex-row justify-center lg:justify-between items-center relative min-h-screen">
        //         <div className="max-lg:pl-12 ml-[0.8rem] lg:min-w-[30rem] lg:ml-[10rem] p-3 h-full lg:mt-[6rem] z-[2]">
        //             <h1 className="text-3xl  p-2 lg:text-5xl font-[600] tracking-wide leading-[2.4rem] lg:leading-[3.5rem]">
        //                 Yes, it&apos;s is confusing!! But {" "}<br className="hidden lg:block" /> you can have both! {" "}
        //                 <br className="hidden lg:block" />
        //                 Order Fresh Meat today{" "}
        //                 <br className="hidden lg:block" />
        //                 from Meatsays!
        //             </h1>

        //             <p className="mt-5 mb-12 text-sm lg:text-base tracking-wide">
        //                 Order fresh pahadi goat meat from Meatsays today!
        //             </p>

        //             <Link href="/products" className="mt-4 border-2 border-white dark:border-black hover:bg-white hover:text-red-600 duration-200 dark:hover:text-white dark:hover:bg-black  px-8 p-3 rounded-lg font-bold">
        //                 SHOP NOW
        //             </Link>
        //         </div>

        //         <div className="absolute right-0 top-0 hidden lg:block">
        //             <Image src="/home/mutton.png" alt="mutton" className="" width={800} height={800} />
        //         </div>

        //         {/* mobile image */}
        //         <div className="lg:hidden">
        //             <Image src="/home/mutton.png" alt="mutton" className="" width={600} height={600} />
        //         </div>
        //     </div>
        // </div >

        <div className='h-fit w-full lg:w-full lg:h-full max-lg:mt-[5.2rem] overflow-hidden'>
            <Swiper
                slidesPerView={1}
                effect={'cube'}
                grabCursor={true}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "25px",
                }}
            >
                {
                    images.map((item, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={item.src}
                                alt="banner"
                                unoptimized={true}
                                width={1400}
                                height={340}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Section1