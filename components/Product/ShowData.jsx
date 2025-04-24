"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
import RatingBar from '@/components/global/RatingBar/RatingBar'
import { addToCart, incrementQuantity, decrementQuantity } from '@/GlobalRedux/cart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})


const ShowData = ({ data }) => {
     const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart); // Assuming your cart slice is stored in the Redux store under the key 'cart'

    const itemInCart = cartItems.find((item) => item._id === data._id);
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

        function capitalizeFirstLetter(string) {
        return string.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    }

    function modifyString(str) {
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
        <div className="min-h-[50vh] flex gap-5 lg:gap-12 justify-between items-start flex-col lg:flex-row px-4 lg:px-20 py-5 lg:py-12">
            <div className="w-[90vw] md:w-[400px] lg:w-[400px] h-[300px] flex justify-center items-center">
                <Swiper
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className=""
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "25px",
                }}
            >
                {
                    data?.images?.map((url, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='overflow-hidden relative h-[300px] w-[90vw] md:w-[400px] lg:w-[400px]'>
                                    <Image src={url} alt="product" fill={true} className="rounded-lg image-cover" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            </div>

            <div className="w-full lg:flex-1">
                <div className="flex items-center justify-between w-full mt-4 mb-1">
                            <p className="text-xl lg:text-2xl text-gray-900 font-[500]">
                                {capitalizeFirstLetter(data.name)}
                            </p>
                            <p className="text-white bg-red-600 text-sm rounded-full px-2 py-1">
                                {data.quantity}
                            </p>
                        </div>
                
                   {/* Rating */}
                        <RatingBar rating={Math.round(Math.random()) + 4} starClassName="w-4 h-4 text-yellow-500" />

                        <div className="flex items-center justify-between w-full text-gray-800 mt-2">
                            <p className="text-sm w-fit px-2 py-1 text-gray-900 bg-red-200 rounded-full">
                                {capitalizeFirstLetter(data.category.category)}
                            </p>
                            <p className="text-lg">{modifyString(data.category.brand)}</p>
                        </div>

                         <p className="text-lg text-gray-900 font-[500] my-3">
                                {data.desc}
                        </p>

                        <div className="flex items-center justify-between w-full text-gray-800 mt-2">
                            <p className="text-white bg-red-600 text-sm rounded-full px-2 py-1">
                                {data.inStock ? "Available" : 'Out of Stock'}
                            </p>
                        </div>

                            <p className="text-gray-900 font-[500] text-lg mt-4">&#8377; {capitalizeFirstLetter(data.price)}.00</p>

                        {/* Price and action buttons */}
                        {
                            data.inStock ? 
                        <div className="flex justify-start items-start w-full mt-4 mb-2">
                            {quantityInCart > 0 ? (
                                <div className="flex items-center justify-center bg-red-600 text-white rounded-lg w-fit lg:w-[30%]">
                                    <button className="text-white bg-red-600 px-5 lg:px-7 py-2 rounded-l-md" onClick={handleDecrementQuantity}>-</button>
                                    <p className="px-5 lg:px-7 py-2 border-l border-r">{quantityInCart}</p>
                                    <button className="text-white bg-red-600 px-5 lg:px-7 py-2 rounded-r-md" onClick={handleIncrementQuantity}>+</button>
                                </div>
                            ) : (
                                <button className={`text-white w-fit lg:w-[30%] border border-red-600 duration-200 hover:text-red-600 bg-red-600 hover:bg-white px-5 py-2 text-base uppercase transition-all rounded-lg ${poppins.className}`} onClick={handleAddToCart}>Add to cart</button>
                            )}
                        </div>
                        : 
                        <div className="flex justify-start items-start w-full mt-4 mb-2">
                            <button className={`text-white w-fit lg:w-[30%] border border-red-600 duration-200 hover:text-red-600 bg-red-600 hover:bg-white px-5 py-2 text-base uppercase transition-all rounded-lg ${poppins.className}`}>
                            Out of Stock
                            </button>
                        </div>
                        }
            </div>
        </div>
    )
}

export default ShowData;