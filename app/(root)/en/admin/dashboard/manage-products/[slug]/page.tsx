import { Poppins } from 'next/font/google'
import { fetchProduct } from '@/lib/actions/ProductActions/ProductActions';
import EditProduct from '@/components/Products/EditProduct'

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

async function getData(slug: string) {
    let res = await fetchProduct(slug);

    if (res.success && res.data) {
        return res.data;
    }
    else {
        return [];
    }
}


export default async function Page({ params }: { params: { slug: string } }) {

    if (!params.slug) return <p>Invalid Page</p>;

    const data = await getData(params.slug);

    return (
        <div className="">
            <EditProduct preData={data} />
        </div>
    )
}