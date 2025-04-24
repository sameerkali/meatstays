import React from 'react'
import { Roboto, Poppins } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})
const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})



const ShowContactCard = ({ data }: { data: any }) => {

    return (
        <div className="my-6">
            <div>
                <div className="w-full border border-gray-200 bg-slate-100 min-h-[3rem] rounded-lg p-2 md:p-4">
                    <h3 className={` ${poppins.className} text-lg text-start md:text-xl text-blue-800 tracking-wider font-[500] mb-2`}>
                        <span className='font-[500]'>Name:</span>{" "} {data?.name}
                    </h3>
                    <div className="flex flex-col gap-3 justify-start items-start mt-4 md:mt-2">

                        <p className={` ${roboto.className} text-sm md:text-sm text-gray-800 tracking-wider font-[400]`}>
                            <span className='font-[500]'> Email:</span>{" "} {data?.email}
                        </p>
                        <p className={` ${roboto.className} text-sm md:text-sm text-gray-800 tracking-wider font-[400]`}>
                            <span className='font-[500]'>Mobile Number:</span>{" "} {data?.mobile}
                        </p>
                        <p className={` ${roboto.className} text-sm md:text-sm text-gray-800 tracking-wider font-[400]`}>
                            <span className='font-[500]'> Message:</span>{" "} {data?.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowContactCard;