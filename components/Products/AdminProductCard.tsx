"use client"
import React from 'react'
import { Roboto, Poppins } from 'next/font/google'
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { deleteProduct, updateProduct } from '@/lib/actions/ProductActions/ProductActions'
import Image from 'next/image'
import Link from 'next/link'

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



const AdminProductCard = ({ data }: { data: any }) => {
    const { toast } = useToast();

    const handleDelete = async (id: string) => {
        const res = await deleteProduct(id);
        if (res?.success) {
            toast({
                variant: "success",
                title: res?.message,
            });

        }
        else {
            toast({
                variant: "destructive",
                description: res?.message,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    const handleUpdate = async () => {
        const res = await updateProduct({
            inStock: !data.inStock
        }, data.slug);
        if (res?.success) {
            toast({
                variant: "success",
                title: res?.message,
            });

        }
        else {
            toast({
                variant: "destructive",
                description: res?.message,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

    function capitalizeFirstLetter(string: string) {
        return string.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    }

    function modifyString(str: string) {
    // Split the string by underscore
    let words = str.split('_');

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words with spaces
    return words.join(' ');
}


    return (
        <div className="my-6">
            <div>
                <div className="w-full border border-blue-200 shadow-md bg-slate-100 min-h-[3rem] rounded-lg p-2">
                    <div className='relative h-[300px] w-[73vw] md:w-[30vw] xl:w-[22vw] rounded-md overflow-hidden'>
                        <Image
                            src={data.images[0]}
                            alt="meat"
                            fill={true}
                            className="object-contain bg-gray-200 rounded-md"
                        />
                    </div>

                    <h3 className={` ${poppins.className} text-base  text-red-600 tracking-wide font-[500] mt-2`}>
                        {capitalizeFirstLetter(data.name)}
                    </h3>

                    <h3 className={` ${poppins.className} text-sm  text-gray-600 italic tracking-wide font-[500] mt-1`}>
                        {capitalizeFirstLetter(data.category.category)}
                    </h3>

                    <div className={` ${poppins.className} text-sm flex items-center justify-between flex-wrap  w-full text-gray-800 tracking-wide font-[500] mt-1`}>
                        <p>{modifyString(data.category.brand)}</p>
                        <p>{data.quantity}</p>
                    </div>

                    <div className={` ${poppins.className} text-sm flex justify-between items-center flex-wrap  w-full text-gray-800 tracking-wide font-[500] mt-1`}>
                        <p className="text-red-600 text-lg">&#8377;{capitalizeFirstLetter(data.price)}</p>
                        <p>{data.inStock ? "Available" : 'Out of Stock'}</p>
                    </div>
                    

                    <div className="flex flex-wrap items-end justify-end gap-2 mt-4 md:mt-2">

                        <button className={`px-3 py-1 cursor-pointer rounded-full  text-red-800 text-xs bg-red-300 flex ${poppins.className} font-[500]`}
                            onClick={handleUpdate}
                        >
                            {data.inStock ? "change to out of stock" : 'change to Stock Available'}
                        </button>

                    </div>

                    <div className="flex flex-wrap items-end justify-end gap-2 mt-4 md:mt-2">
                        <Link className={`text-xs px-2 py-1 bg-blue-600 text-white rounded-full ${poppins.className}`}
                            href={`/en/admin/dashboard/manage-products/${data.slug}`}>Edit</Link>


                        <button className={`px-3 py-1 cursor-pointer rounded-full  text-red-800 text-xs bg-red-300 flex ${poppins.className} font-[500]`}
                            onClick={() => handleDelete(data._id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProductCard;