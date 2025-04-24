"use client"
import React, { useState } from 'react'
import { Roboto, Poppins } from 'next/font/google'
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { deleteCategory } from '@/lib/actions/CategoryActions/CategoryActions'

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



const AdminCategoryCard = ({ data }: { data: any }) => {
    const { toast } = useToast();

    const handleDelete = async (id: string) => {
        const res = await deleteCategory(id);
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


    return (
        <div className="my-6">
            <div>
                <div className="w-full border border-gray-200 bg-slate-100 min-h-[3rem] rounded-lg p-2 md:p-4">
                    <h3 className={` ${poppins.className} text-lg text-start md:text-xl text-blue-800 tracking-wider font-[500] mb-2`}>
                        Brand: {" "}{capitalizeFirstLetter(data.brand)}
                    </h3>
                    <div className="flex gap-4 mt-4 md:mt-2">
                        <div className="flex ">
                            
                            <p className={` ${roboto.className} ml-1 text-sm md:text-sm text-gray-800 tracking-wider font-[400] mb-2`}>
                               Category: {" "} {capitalizeFirstLetter(data.category)}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-end justify-end gap-4 mt-4 md:mt-2">
                        <button className={`px-6 py-1.5 cursor-pointer rounded-full bg-red-100 text-red-800 text-sm    flex ${poppins.className} font-[500]`}
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

export default AdminCategoryCard;