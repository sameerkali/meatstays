import { Poppins } from 'next/font/google'
import AdminUserCard from './AdminUserCard'


const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const ShowUsersAdmin =  ({ data }: { data: any }) => {

    return (
        <div className="flex flex-col gap-3">
            <h2 className={` ${poppins.className} text-2xl mt-8 text-center text-gray-800 tracking-wider font-[500] mb-2`}>
                All 
                {" "}
                <span className="text-blue-800">
                    Users 
                </span>
            </h2>

            <div className="my-3 px-4 md:px-24">
                <div className="w-full">
                    {
                        data && data?.length !== 0 ?
                        <>
                            {
                        data?.map((item: any, i: any) => (
                            <AdminUserCard data={item} key={i} />
                        ))
                        
                    }
                        </>
                        
                        :
                       <>
                            <h2 className={` ${poppins.className} text-xl text-center text-gray-800 tracking-wider font-[500] mb-2`}>
                No 
                {" "}
                <span className="text-blue-800">
                    User 
                </span>
            </h2>
                        </> 
                    }
                    
                   
                </div>
            </div>
        </div>
    )
}

export default ShowUsersAdmin;
