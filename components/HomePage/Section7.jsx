import React from 'react'
import ImgCard from './ImgCard'

const team = [
    // { src: "/teamHome/1.png", name: "Dr. BVRC Purushottam", post: "IAS Secretary. Cooperatives" },
    { src: "/teamHome/2.jpeg", name: "Anand A.d. Shukla", post: "Managing Director, Himalaya Nutri Fresh Products Private Limited" },
    { src: "/teamHome/3.jpg", name: "Mr. Parveen", post: "Chief Executive Officer, Himalaya Nutri Fresh Products Private Limited" },
]

function Section7() {
    return (
        <div className="bg-white dark:bg-gray-900 py-6 lg:py-12 px-3 lg:px-20">

            <div className="flex justify-center items-center gap-3 flex-col mb-5">
                <h2 className="text-xl md:text-2xl text-red-600 text-center tracking-wide uppercase font-[600]">
                    Our team
                </h2>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center md:justify-around gap-5 md:gap-12 w-full mt-5'>
                {
                    team.map((mem, index) => {
                        return (
                            <ImgCard key={index} data={mem} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Section7