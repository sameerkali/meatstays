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

const ProductFilter = () => {
    const searchParams = useSearchParams()
    let search = searchParams.get('brand')
    if (search) {
        search = search.replace(/&/g, '%26')
    }
    const [title, setTitle] = useState(search || '');
    const router = useRouter();


    useEffect(() => {
        if (!title) {
            router.push('/en/admin/dashboard/manage-products')
        }
        else {
            router.push(`/en/admin/dashboard/manage-products?brand=${title}`)
        }
    }, [title])


    return (

        <div className="my-3 flex justify-center items-center">
            <div className="w-full md:w-[70%]">
                <Select
                    onValueChange={(value: string) => setTitle(value)}
                    defaultValue={title}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select Brand" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Show All</SelectItem>
                        <SelectItem value="top_selling">Top Selling</SelectItem>
                        <SelectItem value="bakraw">Bakraw</SelectItem>
                        <SelectItem value="uttarafish">Uttarafish</SelectItem>
                        <SelectItem value="himala_chicken">Himala Chicken</SelectItem>
                        <SelectItem value="chick_fresh">Chick Fresh</SelectItem>
                        <SelectItem value="add_ons">Add on</SelectItem>
                        <SelectItem value="eggs">Eggs</SelectItem>
                        <SelectItem value="kababs">Kababs</SelectItem>
                        <SelectItem value="salami_and_sausages">Salami and sausages</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default ProductFilter;