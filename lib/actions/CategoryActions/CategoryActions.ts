'use server'
import { cookies } from 'next/headers'
import { apiConnector, BASE_URL, CategoryRoutes_API } from "@/lib/services/apis";
import { revalidatePath } from 'next/cache'



export const createCategory = async (values: any) => {
    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')
    try {
        const API = BASE_URL + CategoryRoutes_API.createCategory;
        const res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: values,
            headers: { authtoken: authtoken?.value },
        });
        revalidatePath('/en/admin/dashboard/category')
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

export const fetchAllCategory = async ({
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
            API = BASE_URL + CategoryRoutes_API.fetchAllCategory + `?dateDescSort=true&pageNo=${pageNo}&pageSize=${pageSize}&brand=${brand}`;
        }
        else {
            API = BASE_URL + CategoryRoutes_API.fetchAllCategory + `?dateDescSort=true&pageNo=${pageNo}&pageSize=${pageSize}`;
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

export const deleteCategory = async (id: string) => {
    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')
    try {
        const API = BASE_URL + CategoryRoutes_API.deleteCategory + "/" + id;
        const res = await apiConnector({
            method: "DELETE",
            url: API,
            headers: { authtoken: authtoken?.value },
        });
        revalidatePath('/en/admin/dashboard/category');
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