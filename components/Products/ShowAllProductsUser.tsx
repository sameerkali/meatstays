import { Poppins } from 'next/font/google'
import UserProductFilter from './UserProductFilter'
import dynamic from 'next/dynamic'
const UserProductCard = dynamic(() => import('./UserProductCard'), { ssr: false })

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const ShowAllProductsUser = ({ data }: { data: any }) => {
    return (
        <div className="relative min-h-[30vh] max-w-[1600px] mx-auto">

          <div className="flex flex-col gap-3">
            <h2 className={` ${poppins.className} text-2xl lg:text-3xl mt-8 text-center text-gray-800 tracking-wider font-[600] mb-2`}>
                All 
                {" "}
                <span className="text-red-600">
                    Products 
                </span>
            </h2>

            <UserProductFilter />

            <div className="my-3 px-4 md:px-24">
                <div className="w-full">
                    {
                        data && data?.length !== 0 ?
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8 place-items-center">
                            {
                        data?.map((item: any, i: any) => (
                           <UserProductCard data={item} key={i} />
                        ))
                    }
                        </div>
                        
                        :
                       <>
                            <h2 className={` ${poppins.className} text-xl text-center text-gray-800 tracking-wider font-[500] mb-2`}>
                No 
                {" "}
                <span className="text-red-600">
                    Products 
                </span>
            </h2>
                        </> 
                    }
                    
                   
                </div>
            </div>
            </div>

        </div>
    )
}

export default ShowAllProductsUser;