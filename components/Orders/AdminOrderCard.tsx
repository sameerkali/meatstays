"use client"
import React, { useState, useEffect } from 'react'
import { Roboto, Poppins } from 'next/font/google'
import moment from 'moment';
import { updateOrderStatus } from '@/lib/actions/OrderActions/OrderActions';
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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



const AdminOrderCard = ({ data }: { data: any }) => {
    const { toast } = useToast();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(data.orderStatus);

    function capitalizeFirstLetter(string: string) {
        return string.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    }

    function formatCreatedAt(createdAt: Date): string {
        return moment(createdAt).format('DD MMMM YYYY');
    }

    useEffect(() => {
        const handleUpdate = async (id: string, orderStatus: string) => {
            setLoading(true)
            const res = await updateOrderStatus({ id, orderStatus });
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
            setLoading(false)
        }
        if(status !== data.orderStatus){
            handleUpdate(data._id, status);
        }
    }, [status])

 


    return (
        <div className="my-6">
            <div className="">
                <div className="w-full border border-red-600 bg-slate-50 min-h-[3rem] rounded-lg shadow-sm hover:shadow-xl duration-200 p-2 md:p-4">
                    <div className="flex items-start lg:items-center flex-col lg:flex-row justify-between text-sm">
                        <p>
                            Ordered On:
                            {" "}
                            <span className="font-[500] text-base">
                                {formatCreatedAt(data.createdAt)}
                            </span>
                        </p>
                        <p>
                            Amount Paid:
                            {" "}
                            <span className="font-[500] text-base">
                                ₹
                                {" "}
                                {data.totalAmount}
                            </span>
                        </p>
                    </div>

                    <div className="flex items-start lg:items-center flex-col lg:flex-row justify-between text-sm lg:mt-2">
                        <p>
                            Order Status:
                            {" "}
                            <span className="font-[500] text-base">
                                {data.orderStatus}
                            </span>
                        </p>
                        <p>
                            Payment Mode:
                            {" "}
                            <span className="font-[500] text-base">
                                {data.paymentMode === 'cod' ? "COD" : "Online"}
                            </span>
                        </p>
                    </div>

                    <div className="flex items-center justify-end gap-4 mt-4">

                        <div className="">
                            <Select
                                disabled={loading}
                                onValueChange={(value: string) => setStatus(value)}
                                defaultValue={status}
                                
                            >
                                <SelectTrigger className="bg-red-600 text-white font-[500]">
                                    <SelectValue placeholder="Change Order Status" />
                                </SelectTrigger>
                                <SelectContent className="bg-red-600 text-white font-[500]">
                                    <SelectItem value="processing">processing</SelectItem>
                                    <SelectItem value="Delivered">Delivered</SelectItem>
                                    <SelectItem value="Cancelled">Cancel</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <button onClick={() => setShow((prev: any) => !prev)} className="flex justify-center items-center text-white bg-red-600 text-sm px-5 py-2 rounded-md">
                            {
                                show ? "Hide details" : "Show details"
                            }
                        </button>
                    </div>
                </div>
            </div>
            {
                show &&
                <div className="mt-3">
                    <div className="w-full border border-red-600 bg-slate-50 min-h-[3rem] rounded-lg shadow-sm hover:shadow-xl duration-200 p-2 md:p-4">

                        <div className='flex flex-col mt-2 gap-[2px] w-full text-sm  text-gray-900'>
                            <p className="text-base font-[500] text-red-600 border-b border-red-600 mb-1">Products</p>
                            {
                                data?.items?.map((item: any, i: any) => (
                                    <div key={i} className="mb-1.5">
                                        <div className="flex justify-between items-center flex-wrap w-full lg:w-[60%]">
                                            <p>Name:{" "}<span className="font-[500] text-red-600">{item?.name} {" "} ({item?.quantity})</span></p>
                                            <p>Quantity:{" "}<span className="font-[500] text-red-600">{item?.Quantity}</span></p>
                                        </div>
                                        <div className="flex justify-between items-center flex-wrap w-full lg:w-[60%] mt-1">
                                            <p>Price Per Product:{" "}<span className="font-[500] text-red-600">₹ {" "}{item?.price}</span></p>
                                            <p>Total Price:{" "}<span className="font-[500] text-red-600">₹ {" "}{item?.Quantity * parseInt(item?.price)}</span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='flex flex-col mt-2 gap-[2px] w-full text-sm  text-gray-900'>
                            <p className="text-base font-[500] text-red-600 border-b border-red-600 mb-1">Delivery Address</p>
                            <p>Name:{" "}<span className="font-[500]">{data?.address?.name}</span></p>
                            <p>Email:{" "}<span className="font-[500]">{data?.address?.email}</span></p>
                            <p>Mobile:{" "}<span className="font-[500]">{data?.address?.mobile}</span></p>
                            <p>Address:{" "}<span className="font-[500]">{data?.address?.address}</span></p>
                            <p>Landmark:{" "}<span className="font-[500]">{data?.address?.landmark}</span></p>
                            <p>pincode:{" "}<span className="font-[500]">{data?.address?.pincode}</span></p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AdminOrderCard;