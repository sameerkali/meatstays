import { cookies } from 'next/headers'
import Header from '@/components/global/Navbar/Header';
import Footer from '@/components/global/Footer/Footer';
import ShowAllProductsUser from '@/components/Products/ShowAllProductsUser'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { fetchAllProducts } from '@/lib/actions/ProductActions/ProductActions';

interface dataProps {
    pageNo?: number,
    pageSize?: number,
    brand?: string,
}

let totalCount: number = 0;
async function getData({
    pageNo = 1,
    pageSize = 25,
    brand="all"
}: dataProps) {
    let res = await fetchAllProducts({ pageNo, pageSize, brand });
    if (res.success && res.data) {
        totalCount = res.totalCount;
        return res.data;
    }
    else {
        return [];
    }
}


export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const cookieStore = cookies()
  const usertoken = cookieStore.get('usertoken');

  let pageNo = typeof searchParams.pageNo === 'string' ? Number(searchParams.pageNo) : 1
  let pageSize = typeof searchParams.pageSize === 'string' ? Number(searchParams.pageSize) : 30
  let brand = searchParams.brand; 

  const data = await getData({ pageNo, pageSize, brand });

  return (
    <>
      <Header usertoken={usertoken} />
      <div className='h-[5.8rem] lg:h-[10.5rem] bg-red-600'></div>
      <ShowAllProductsUser data={data} />

            <div className="flex w-full justify-between items-center flex-wrap gap-4 px-4 md:px-24 py-6">
                <p className={`font-[500] text-sm`}>
                    Page :
                    {" "}
                    {pageNo}
                    {" "}
                    of
                    {" "}
                    {Math.ceil(totalCount / pageSize) === 0 ? 1 : Math.ceil(totalCount / pageSize)}
                </p>

                <div className="flex gap-4 flex-wrap">
                    <Link className='px-4 flex justify-center items-center py-1.5 bg-red-600 rounded-md text-sm text-white'
                        href={{
                            pathname: '/products',
                            query: {
                                ...(brand ? { brand } : {}),
                                pageNo: pageNo > 1 ? pageNo - 1 : 1
                            }
                        }}
                    >
                        <ChevronLeft className="mr-1 h-5 w-5" /> Prev
                    </Link>

                    {
                        pageNo >= Math.ceil(totalCount / pageSize)
                            ?
                            <>
                                <button disabled={true} className='px-4 py-1.5 flex justify-center items-center bg-red-800 rounded-md text-sm text-white'

                                >
                                    Next <ChevronLeft className="ml-1 h-5 w-5 rotate-180" />
                                </button>
                            </>
                            :
                            <>
                                <Link className='px-4 py-1.5 flex justify-center items-center bg-red-600 rounded-md text-sm text-white'
                                    href={{
                                        pathname: '/products',
                                        query: {
                                            ...(brand ? { brand } : {}),
                                            pageNo: pageNo + 1
                                        }
                                    }}
                                >
                                    Next <ChevronLeft className="ml-1 h-5 w-5 rotate-180" />
                                </Link>
                            </>
                    }
                </div>
            </div>

      <Footer />
    </>

  );
}
