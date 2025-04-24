import dynamic from 'next/dynamic'
const ShowData = dynamic(() => import('./ShowData'), { ssr: false })

const ShowProduct = ({ data }: { data: any }) => {
    return (
        <div className="min-h-[40vh]">
            <ShowData data={data} />
        </div>
    )
}

export default ShowProduct;