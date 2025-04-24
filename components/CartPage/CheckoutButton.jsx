"use client"
import React, { useState } from 'react'
import { Loader2 } from "lucide-react"
import { useRouter } from 'next/navigation'
import { createOrder, OrderPayment, VerifyPayment, SavePaymentDetails } from '@/lib/actions/OrderActions/OrderActions'
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/GlobalRedux/cart.slice';

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const [paymentMode, setPaymentMode] = useState('cod');
  const router = useRouter();
  const { toast } = useToast();
  const dispatch = useDispatch();


  const cartItems = useSelector((state) => state.cart);
  const address = useSelector((state) => state.address);

  // Calculate the total price for all products and their quantities
  const total = cartItems.reduce((acc, curr) => acc + (curr.Quantity * curr.price), 0);

  let orderDetails = {
    items: cartItems,
    address: address,
    totalAmount: total,
    paymentMode: paymentMode
  }

  const handleSubmit = async () => {
    setLoading(true);
    if(address.address.length === 0){
      toast({
          variant: "destructive",
          description: "Add Address!",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        setLoading(false);
      return;
    }
    const res = await createOrder(orderDetails);
    // console.log(res);

    if (res?.success) {
      if (res?.data?.paymentMode === "online") {
        // online page 
        await handlePayment(res?.data?._id);
      }
      else {
        // offline payment - cod
        toast({
          variant: "success",
          title: res.message,
        });
        dispatch(clearCart());
        // router.push('/login-user');
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      }
    }
    else {
      if (res && res?.message === "Invalid token!") {
        toast({
          variant: "destructive",
          description: "Login to checkout!",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        router.push('/login-user')
      }
      else {
        toast({
          variant: "destructive",
          description: res?.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }
    }
    setLoading(false);
  }

  const handlePayment = async (orderId) => {
    setLoading(true)
    const res = await OrderPayment(orderId);
    if (res?.success) {
      toast({
        variant: "success",
        title: res.message,
      });
      await initPayment(res?.data, orderId);
    }
    else {
      toast({
        variant: "destructive",
        description: res?.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
    setLoading(false);
  }

  const initPayment = async (data, orderId) => {
    const key = process.env.RAZORPAY_KEY_ID;
    // console.log(data);
    const options = {
      key: key,
      amount: data.amount,
      currency: data.currency,
      name: data.heading,
      description: data?.heading,
      order_id: data.id,
      handler: async (response) => {
        const res = await VerifyPayment(response);
        if (res?.success) {
          toast({
            variant: "success",
            title: res.message,
          });
          savePayment(res.data, orderId, data.amount)
        }
        else {
          toast({
            variant: "destructive",
            description: res?.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }
      },
      theme: {
        color: "#FF0000",
      },
    };
    if (typeof window !== 'undefined' && 'Razorpay' in window) {
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      console.error('Razorpay library not found or not loaded.');
    }
   
  };

  const savePayment = async (data, orderId, amount) => {
    setLoading(true);
    let values = {
      razorpay_order_id: data?.razorpay_order_id,
      razorpay_payment_id: data?.razorpay_payment_id,
      orderId: orderId,
      amount: amount/100,
    }

    const res = await SavePaymentDetails(values);
    // console.log(res);
    if (res?.success) {
      toast({
        variant: "success",
        title: res.message,
      });
      dispatch(clearCart());
      // router.push('/login-user');
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    }
    else {
      toast({
        variant: "destructive",
        description: res?.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
    
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-end mt-5 lg:justify-between lg:items-center gap-4">
        <p className="text-sm font-[500] text-black px-2 py-2 hidden lg:block">Select Payment Mode: </p>
        <div className="flex items-end gap-4 justify-end">
          <button disabled={loading} onClick={() => setPaymentMode("cod")} className={`flex  text-sm px-5 py-2 rounded-md ${paymentMode === "cod" ? "text-white bg-red-600" : "text-black bg-gray-200"}`}>
            COD
          </button>
          <button disabled={loading} onClick={() => setPaymentMode("online")} className={`flex  text-sm px-5 py-2 rounded-md ${paymentMode === "online" ? "text-white bg-red-600" : "text-black bg-gray-200"} `}>
            Pay Online
          </button>
        </div>
      </div>
      <div className="flex items-end justify-end mt-5">
        <button disabled={loading} onClick={handleSubmit} className="flex justify-center items-center text-white bg-red-600 text-sm px-5 py-2 rounded-md">
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Checkout
        </button>
      </div>
    </>
  )
}

export default CheckoutButton

// logint ot checkour wala game server component wale function me check kr lenege
// success@razorpay
