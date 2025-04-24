"use client"
import { Poppins } from 'next/font/google'
import { useSelector } from 'react-redux';
import Address from './Address'
import CartItem from './CartItem'
import Link from 'next/link'
import CheckoutButton from './CheckoutButton';

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const CartPage = () => {

    const cartItems = useSelector((state: any) => state.cart);
    const address = useSelector((state: any) => state.address);

    // Calculate the total price for all products and their quantities
    const total = cartItems.reduce((acc: any, curr: any) => acc + (curr.Quantity * curr.price), 0);

    return (
        cartItems && cartItems?.length !== 0 ?
            <div className="my-3 px-4 md:px-24 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start gap-6 lg:gap-12">
                <div className="flex flex-col gap-5 w-full lg:flex-1">
                    {
                        cartItems?.map((item: any, i: any) => (
                            <CartItem data={item} key={i} />
                        ))
                    }
                </div>
                <div className="bg-slate-50 w-full lg:flex-1 border border-red-600 rounded-lg p-4">
                    <h2 className="text-lg text-red-600 font-[600] mb-4">Cart Summary</h2>

                    {cartItems?.map((item: any) => (
                        <ProductDetails
                            key={item._id}
                            productName={item.name}
                            quantity={item.Quantity}
                            pricePerItem={item.price}
                        />
                    ))}
                    {/* Display final total */}
                    <div className="mt-4 border-t py-2 flex justify-between items-center flex-wrap border-red-600">
                        <p className="font-[500]">Subtotal</p>
                        <p className="font-[600]">₹{" "}{total.toFixed(2)}</p>
                    </div>

                    <Address />

                    <CheckoutButton  />

                    {
                        address && address?.address.length !== 0 &&
                        <div className='flex flex-col mt-3 gap-[2px] w-fit p-3 text-[14px] border text-gray-900 border-red-600 rounded-md'>
                            <p className="text-base underline font-[500] text-red-600">Delivery Address</p>
                            <p>Name:{" "}<span className="font-[500]">{address?.name}</span></p>
                            <p>Email:{" "}<span className="font-[500]">{address?.email}</span></p>
                            <p>Mobile:{" "}<span className="font-[500]">{address?.mobile}</span></p>
                            <p>Address:{" "}<span className="font-[500]">{address?.address}</span></p>
                            <p>Landmark:{" "}<span className="font-[500]">{address?.landmark}</span></p>
                            <p>pincode:{" "}<span className="font-[500]">{address?.pincode}</span></p>
                        </div>
                    }
                </div>
            </div>

            :
            <div className={`my-3 px-4 md:px-24 flex gap-3 flex-col min-h-[60vh] lg:min-h-[40vh]  justify-center items-center ${poppins.className}`}>
                <p className="text-gray-900 font-[500] text-base rounded-md tracking-wide">
                    No Products in Cart
                </p>
                <Link href="/products"
                    className="bg-red-600 text-white px-5 py-2 text-sm rounded-md tracking-wide">
                    Shop Now
                </Link>
            </div>
    )
}

export default CartPage;


const ProductDetails = ({ productName, quantity, pricePerItem }: any) => {
    const totalPrice = quantity * pricePerItem;

    return (
        <div className="flex flex-col mb-2">
            <div className="flex justify-between items-center mb-1 flex-wrap">
                <p className="font-[500]">{productName}</p>
                <p className="text-sm">Quantity: {quantity}</p>
            </div>
            <p className="text-end font-[500]">₹{" "}{totalPrice.toFixed(2)}</p>
        </div>
    );
};