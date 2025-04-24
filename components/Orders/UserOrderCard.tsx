"use client"
import React, { useState } from 'react'
import { Roboto, Poppins } from 'next/font/google'
import moment from 'moment';

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



const UserOrderCard = ({ data }: { data: any }) => {
    const [show, setShow] = useState(false);

    function capitalizeFirstLetter(string: string) {
        return string.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    }

    function formatCreatedAt(createdAt: Date): string {
        return moment(createdAt).format('DD MMMM YYYY');
    }


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

                    <div className="flex items-end justify-end mt-4">
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

export default UserOrderCard;