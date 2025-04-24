import Header from '@/components/global/Navbar/Header';
import Footer from '@/components/global/Footer/Footer';
import NoProduct from '@/components/Product/NoProduct';
import { cookies } from 'next/headers'
import { fetchProduct } from '@/lib/actions/ProductActions/ProductActions';
import type { Metadata, ResolvingMetadata } from "next";
import ShowProduct from '@/components/Product/ShowProduct';

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

async function getData(slug: string) {
    let res = await fetchProduct(slug);
    return res;
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const res = await getData(params.slug);
    let data = res.data;

    return {
        title: data?.name,
        description: data?.desc,
        keywords: ["MeatSays", data?.name],
        alternates: {
            canonical: `/${data?.slug}`
        },
        openGraph: {
            images: [{
                url: data?.images[0],
            }],
        },
        twitter: {
            images: [{
                url: data?.images[0],
            }],
        },
    }
}


export default async function Page({ params }: { params: { slug: string } }) {
    const cookieStore = cookies()
    const usertoken = cookieStore.get('usertoken')

    if (!params.slug) return <p>Invalid Page</p>;

    const res = await getData(params.slug);

    if (!res.success) {
        return (
            <>
                <Header usertoken={usertoken} />
                <div className='h-[5.8rem] lg:h-[10.5rem] bg-red-600'></div>
                <div className="">
                    <NoProduct />
                </div>
                <Footer />
            </>
        )
    }

    let data = res.data;


    return (
        <>
            <Header usertoken={usertoken} />
            <div className='h-[5.8rem] lg:h-[10.5rem] bg-red-600'></div>
            <div className="">
                <ShowProduct data={data} />
            </div>
            <Footer />
        </>

    );
}
