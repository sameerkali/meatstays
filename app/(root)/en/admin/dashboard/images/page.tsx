import React from 'react'
import UploadImages from '@/components/UploadImages/UploadImages';

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

    return (
        <div>
            <UploadImages />
        </div>
    )
}
