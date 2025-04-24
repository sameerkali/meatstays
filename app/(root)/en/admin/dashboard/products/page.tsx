import React from 'react'
import CreateProductsForm from '@/components/Products/CreateProductsForm'

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

    return (
        <div>
            <CreateProductsForm />
        </div>
    )
}
