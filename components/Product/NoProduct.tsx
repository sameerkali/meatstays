import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const NoProduct = () => {
    return (
        <div className="h-[50vh] flex justify-center items-center">
            <h2 className={` ${poppins.className} text-2xl lg:text-3xl text-center text-gray-800 tracking-wider font-[600]`}>
                Oops! Product
                {" "}
                <span className="text-red-600">
                    not found.
                </span>
            </h2>
        </div>
    )
}

export default NoProduct;