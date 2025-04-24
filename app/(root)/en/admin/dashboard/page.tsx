import { getAllStatics } from '@/lib/actions/OrderActions/OrderActions';
import HomePage from '@/components/AdminPanel/HomePage/HomePage';

async function getData() {
    let res = await getAllStatics();
    if (res.success && res.data) {
        return res.data;
    }
    else {
        return {};
    }
}


export default async function Page() {
    const data = await getData();

    return (
        <>
            <HomePage data={data} />
        </>
    )
}