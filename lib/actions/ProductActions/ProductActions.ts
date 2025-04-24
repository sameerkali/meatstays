'use server'
import { cookies } from 'next/headers'
import { apiConnector, BASE_URL, ProductsRoutes_API } from "@/lib/services/apis";
import { revalidatePath } from 'next/cache'

export const createProduct = async (values: any) => {
    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')
    try {
        const API = BASE_URL + ProductsRoutes_API.createProduct;
        const res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: values,
            headers: { authtoken: authtoken?.value },
        });
        revalidatePath('/en/admin/dashboard/products')
        return res.data;
    }
    catch (error: any) {
        if (error?.response?.data) {
            return error.response.data;
        }
        else {
            return {
                success: false,
                message: "Server Error"
            }
        }
    }
};

export const fetchAllProducts = async ({
    pageNo = 1,
    pageSize = 25,
    brand = "all"
}: {
    pageNo?: number,
    pageSize?: number,
    brand?: string
}) => {

    try {
        let API: string;
        if (brand !== 'all') {
            API = BASE_URL + ProductsRoutes_API.fetchAllProducts + `?dateDescSort=true&pageNo=${pageNo}&pageSize=${pageSize}&brand=${brand}`;
        }
        else {
            API = BASE_URL + ProductsRoutes_API.fetchAllProducts + `?dateDescSort=true&pageNo=${pageNo}&pageSize=${pageSize}`;
        }

        const res = await apiConnector({
            method: "GET",
            url: API,
        });
        return res.data;
    }
    catch (error: any) {
        if (error?.response?.data) {
            return error.response.data;
        }
        else {
            return {
                success: false,
                message: "Server Error"
            }
        }
    }
}

export const deleteProduct = async (id: string) => {
    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')
    try {
        const API = BASE_URL + ProductsRoutes_API.deleteProduct + "/" + id;
        const res = await apiConnector({
            method: "DELETE",
            url: API,
            headers: { authtoken: authtoken?.value },
        });
        revalidatePath('/en/admin/dashboard/manage-products');
        return res.data;
    }
    catch (error: any) {
        if (error?.response?.data) {
            return error.response.data;
        }
        else {
            return {
                success: false,
                message: "Server Error"
            }
        }
    }
};

export const updateProduct = async (values: any, slug: string) => {
    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')
    try {
        const API = BASE_URL + ProductsRoutes_API.updateProduct + "/" + slug;
        const res = await apiConnector({
            method: "PUT",
            url: API,
            headers: { authtoken: authtoken?.value },
            bodyData: {
                name: values?.name,
                desc: values?.desc,
                quantity: values?.quantity,
                price: values?.price,
                inStock: values?.inStock,
                category: values?.category,
                brand: values?.brand,
                images: values?.images
            },
        });
        revalidatePath('/en/admin/dashboard/manage-products');
        revalidatePath('/products');

        return res.data;
    }
    catch (error: any) {
        if (error?.response?.data) {
            return error.response.data;
        }
        else {
            return {
                success: false,
                message: "Server Error"
            }
        }
    }
};

export const fetchProduct = async (slug: string) => {
    try {
        const API = BASE_URL + ProductsRoutes_API.fetchSingle + "/" + slug;
        const res = await apiConnector({
            method: "GET",
            url: API,
        });

        return res.data;
    }
    catch (error: any) {
        if (error?.response?.data) {
            return error.response.data;
        }
        else {
            return {
                success: false,
                message: "Server Error"
            }
        }
    }
};