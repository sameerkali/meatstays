'use client'
import { useState, useEffect } from 'react'
import { fetchAllProducts } from '@/lib/actions/ProductActions/ProductActions';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

const UserProductFilter = () => {
    const searchParams = useSearchParams()
    let search = searchParams.get('brand')
    if (search) {
        search = search.replace(/&/g, '%26')
    }
    const [title, setTitle] = useState(search || '');
    const router = useRouter();


    useEffect(() => {
        if (!title) {
            router.push('/products')
        }
        else {
            router.push(`/products?brand=${title}`)
        }
    }, [title])


    return (

        <div className="my-1 flex justify-center items-center px-4">
            <div className="w-full md:w-[70%] flex flex-wrap gap-3 md:gap-4 justify-center items-center">
                {/* <Select
                    onValueChange={(value: string) => setTitle(value)}
                    defaultValue={title}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Show All</SelectItem>
                        <SelectItem value="bakraw">Bakraw</SelectItem>
                        <SelectItem value="uttarafish">Uttarafish</SelectItem>
                        <SelectItem value="himala_chicken">Himala Chicken</SelectItem>
                        <SelectItem value="chick_fresh">Chick Fresh</SelectItem>
                        <SelectItem value="add_ons">Add on</SelectItem>
                        <SelectItem value="eggs">Eggs</SelectItem>
                        <SelectItem value="kababs">Kababs</SelectItem>
                        <SelectItem value="salami_and_sausages">Salami and sausages</SelectItem>
                    </SelectContent>
                </Select> */}
                <Link href="/products?brand=all" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    All
                </Link>
                <Link href="/products?brand=top_selling" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    Top Selling
                </Link>
                <Link href="/products?brand=bakraw" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    Bakraw mutton
                </Link>
                <Link href="/products?brand=uttarafish" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    Uttara Fish - Fish
                </Link>
                <Link href="/products?brand=himala_chicken" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    Himala Desi Chicken
                </Link>
                <Link href="/products?brand=chick_fresh" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    Chick Fresh Chicken
                </Link>
                <Link href="/products?brand=eggs" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    Eggs
                </Link>
                <Link href="/products?brand=kababs" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    Kababs
                </Link>
                <Link href="/products?brand=salami_and_sausages" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    Salami and sausages
                </Link>
                <Link href="/products?brand=add_ons" className="px-3 py-1.5 rounded-full text-sm text-white bg-red-600 tracking-wide">
                    Add Ons
                </Link>
            </div>
        </div>
    )
}

export default UserProductFilter;