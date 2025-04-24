'use server'
import { cookies } from 'next/headers'
import { apiConnector, BASE_URL, ContactRoutes_API } from "@/lib/services/apis";
import { revalidatePath } from 'next/cache'

export const createContact = async (values: any) => {
    try {
        const API = BASE_URL + ContactRoutes_API.createContact;
        const res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: values,
        });
        revalidatePath('/en/admin/dashboard/contacts')
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

export const fetchAllContact = async ({
    pageNo = 1,
    pageSize = 25,
}: {
    pageNo?: number,
    pageSize?: number,
}) => {

    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')

    try {
        let API: string = BASE_URL + ContactRoutes_API.fetchAllContact + `?dateDescSort=true&pageNo=${pageNo}&pageSize=${pageSize}`;

        const res = await apiConnector({
            method: "GET",
            url: API,
            headers: { authtoken: authtoken?.value },
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