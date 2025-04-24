"use client"

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Roboto, Poppins } from 'next/font/google'
import Image from 'next/image';
import RatingBar from '@/components/global/RatingBar/RatingBar'
import { addToCart, incrementQuantity, decrementQuantity } from '@/GlobalRedux/cart.slice';
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

const UserProductCard = ({ data }: { data: any }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cart); // Assuming your cart slice is stored in the Redux store under the key 'cart'

    const itemInCart = cartItems.find((item: any) => item._id === data._id);
    const quantityInCart = itemInCart ? itemInCart.Quantity : 0;

    const handleAddToCart = () => {
        dispatch(addToCart(data));
    };

    const handleIncrementQuantity = () => {
        dispatch(incrementQuantity(data._id));
    };

    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity(data._id));
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
        <div className="my-6">
            <div>
                <div className={`w-full border border-red-200 shadow-md hover:shadow-xl min-h-[3rem] duration-200 rounded-lg p-2 ${poppins.className}`}>
                    <div className='relative h-[200px] w-[73vw] md:w-[30vw] xl:w-[22vw] rounded-md overflow-hidden'>
                        <Link href={`/products/${data.slug}`}>
                        <Image
                            src={data.images[0]}
                            alt="meat"
                            fill={true}
                            className="object-cover  rounded-md"
                        />
                        </Link>
                        <Image
                            src="/products/fssai.png"
                            alt="fssai"
                            height="50"
                            width="50"
                            className="object-contain absolute bottom-0 right-0 bg-gray-200 w-12 h-6 rounded-full"
                        />
                    </div>
                    <div className="px-2">
                        {/* Product name and quantity */}
                    <Link href={`/products/${data.slug}`}>
                        <div className="flex items-center justify-between w-full mt-4 mb-1">
                            <p className="text-lg text-gray-900 font-[500]">
                                {capitalizeFirstLetter(data.name)}
                            </p>
                            <p className="text-white bg-red-600 text-xs rounded-full px-2 py-1">
                                {data.quantity}
                            </p>
                        </div>
                    </Link>
                        {/* Rating */}
                        <RatingBar rating={Math.round(Math.random()) + 4} starClassName="w-4 h-4 text-yellow-500" />

                        {/* Category and brand */}
                        <Link href={`/products/${data.slug}`}>
                        <div className="flex items-center justify-between w-full text-gray-800 mt-2">
                            <p className="text-xs w-fit px-2 py-1 text-gray-900 bg-red-200 rounded-full">
                                {capitalizeFirstLetter(data.category.category)}
                            </p>
                            <p>{modifyString(data.category.brand)}</p>
                        </div>
                        </Link>

                        {/* Availability */}
                        <Link href={`/products/${data.slug}`}>
                        <div className="flex items-center justify-between w-full text-gray-800 mt-2">
                            <p className="text-white bg-red-600 text-xs rounded-full px-2 py-1">
                                {data.inStock ? "Available" : 'Out of Stock'}
                            </p>
                        </div>
                        </Link>
                        
                        {/* Price and action buttons */}
                       {
                            data.inStock ?
                                <div className="flex justify-between items-center w-full mt-4 mb-2">
                                    <p className="text-gray-900 font-[500] text-lg">&#8377; {capitalizeFirstLetter(data.price)}.00</p>
                                    {quantityInCart > 0 ? (
                                        <div className="flex items-center bg-red-600 text-white rounded-lg">
                                            <button className="text-white bg-red-600 px-3 lg:px-3 py-1 rounded-l-md" onClick={handleDecrementQuantity}>-</button>
                                            <p className="px-3 lg:px-3 border-l border-r">{quantityInCart}</p>
                                            <button className="text-white bg-red-600 px-3 lg:px-3 py-1 rounded-r-md" onClick={handleIncrementQuantity}>+</button>
                                        </div>
                                    ) : (
                                        <button className={`text-white border border-red-600 duration-200 hover:text-red-600 bg-red-600 hover:bg-white px-5 py-1.5 text-sm transition-all rounded-lg ${poppins.className}`} onClick={handleAddToCart}>Add to cart</button>
                                    )}
                                </div>
                            :
                                <div className="flex justify-between items-center w-full mt-4 mb-2">
                                    <p className="text-gray-900 font-[500] text-lg">&#8377; {capitalizeFirstLetter(data.price)}.00</p>
                                    <button className={`text-white border border-red-600 duration-200 hover:text-red-600 bg-red-600 hover:bg-white px-5 py-1.5 text-sm transition-all rounded-lg ${poppins.className}`}>Out Of Stock</button>
                                </div>
                       }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProductCard;
