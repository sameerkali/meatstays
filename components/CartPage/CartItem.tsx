"use client"

import React from 'react';
import { useDispatch } from 'react-redux';
import { Poppins } from 'next/font/google'
import Image from 'next/image';
import { removeFromCart, incrementQuantity, decrementQuantity } from '@/GlobalRedux/cart.slice';
import { RxCross1 } from "react-icons/rx";

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const CartItem = ({ data }: { data: any }) => {
    const dispatch = useDispatch();

    const handleIncrementQuantity = () => {
        dispatch(incrementQuantity(data._id));
    };

    const handleDecrementQuantity = () => {
        if (data.Quantity === 1) {
            // If quantity is 1, remove the product from the cart
            dispatch(removeFromCart(data._id));
        } else {
            dispatch(decrementQuantity(data._id));
        }
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(data._id));
    };

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
        <div>
            <div className={`w-full border flex flex-col lg:flex-row  items-start justify-start lg:items-center lg:justify-center  gap-3 lg:gap-5 border-red-200 shadow-md hover:shadow-xl min-h-[3rem] duration-200 rounded-lg p-2 ${poppins.className}`}>

                <div>
                    <div className='relative h-[100px] w-[100px] rounded-md overflow-hidden'>
                        <Image
                            src={data.images[0]}
                            alt="meat"
                            fill={true}
                            className="object-cover  rounded-md"
                        />
                        <Image
                            src="/products/fssai.png"
                            alt="fssai"
                            height="50"
                            width="50"
                            className="object-contain absolute bottom-0 right-0 bg-gray-200 w-12 h-6 rounded-full"
                        />
                    </div>
                </div>

                <div className="px-2 w-full">
                    {/* Product name and quantity */}
                    <div className="flex items-center justify-between w-full mb-1">
                        <p className="text-lg text-gray-900 font-[500]">
                            {capitalizeFirstLetter(data?.name)}
                        </p>

                        <button className="bg-red-300 text-gray-900 p-1 rounded-full" onClick={handleRemoveFromCart}>
                            <RxCross1 className="text-sm" />
                        </button>

                    </div>

                    {/* Category and brand */}
                    <div className="flex items-center justify-between w-full text-gray-800 mt-2">
                        <p className="text-xs w-fit px-2 py-1 text-gray-900 bg-red-200 rounded-full">
                            {capitalizeFirstLetter(data?.category?.category)}
                        </p>
                        <p>{modifyString(data?.category?.brand)}</p>
                    </div>

                    {/* Availability */}
                    <div className="flex items-center justify-between w-full text-gray-800 mt-2">
                        <p className="text-white bg-red-600 text-xs rounded-full px-2 py-1">
                            {data?.inStock ? "Available" : 'Out of Stock'}
                        </p>

                        <p className="text-white bg-red-600 text-xs rounded-full px-2 py-1">
                            {data?.quantity}
                        </p>
                    </div>

                    <div className="flex justify-between items-center w-full mt-4 mb-2">
                        <p className="text-gray-900 font-[500] text-lg">&#8377; {data?.price}.00</p>
                        <div className="flex items-center bg-red-600 text-white rounded-lg">
                            <button className="text-white bg-red-600 px-3 lg:px-3 py-1 rounded-l-md" onClick={handleDecrementQuantity}>-</button>
                            <p className="px-3 lg:px-3 border-l border-r">{data.Quantity}</p>
                            <button className="text-white bg-red-600 px-3 lg:px-3 py-1 rounded-r-md" onClick={handleIncrementQuantity}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
