import { cookies } from 'next/headers'
import Header from '@/components/global/Navbar/Header';
import Footer from '@/components/global/Footer/Footer';
import dynamic from 'next/dynamic'
const CartPage = dynamic(() => import('@/components/CartPage/CartPage'), { ssr: false })

import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})


export default async function Page() {
  const cookieStore = cookies()
  const usertoken = cookieStore.get('usertoken');

  return (
    <>
      <Header usertoken={usertoken} />
      <div className='h-[5.8rem] lg:h-[10.5rem] bg-red-600'></div>
       <div className="relative min-h-[30vh] max-w-[1600px] mx-auto">

            <div className="flex flex-col gap-3 pb-6 lg:pb-8">
                <h2 className={` ${poppins.className} text-2xl lg:text-3xl mt-8 text-center text-gray-800 tracking-wider font-[600] mb-2`}>
                    Cart
                </h2>
                         <CartPage  />
            </div>
        </div>

      <Footer />
    </>

  );
}
