import React from 'react'
import Image from 'next/image'

function ImgCard({ data }) {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-[200px]'>
            <div className="rounded-full relative h-[200px] w-[200px] overflow-hidden">
                <Image src={data.src} alt="team" fill={true} className="object-cover rounded-full"
                />
            </div>
            <div className='my-4 text-center'>
                <p className=' text-lg font-semibold text-red-600'>{data.name}</p>
                <p className=' text-base font-light'>{data.post}</p>
            </div>
        </div>
    )
}

export default ImgCard
