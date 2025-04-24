'use server'
import { cookies } from 'next/headers'
import { apiConnector, BASE_URL, UserRoutes_API } from "@/lib/services/apis";
import { revalidatePath } from 'next/cache'

export const registerUser = async (values: any) => {
    try {
        const API = BASE_URL + UserRoutes_API.registerUser;
        const res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: values,
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

export const verifyAccount = async (values: any) => {
    try {
        const API = BASE_URL + UserRoutes_API.verifyAccount;
        const res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: values,
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

export const loginUser = async (values: any) => {
    try {
        const API = BASE_URL + UserRoutes_API.loginUser;
        const res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: {
                email: values.email.trim().toLowerCase(),
                password: values.password,
            },
        });
        const oneDay = 1 * 60 * 60 * 1000
        cookies().set({
            name: 'usertoken',
            value: res.data.data,
            httpOnly: true,
            path: '/',
            maxAge: Date.now() - oneDay,
            expires: Date.now() - oneDay
        })
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

export const verifyExistingAccount = async (values: any) => {
    try {
        const API = BASE_URL + UserRoutes_API.verifyExistingAccount;
        const res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: values,
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

export const validateUser = async () => {
    const cookieStore = cookies()
    const usertoken = cookieStore.get('usertoken')
    try {
        const API = BASE_URL + UserRoutes_API.validateUser;
        const res = await apiConnector({
            method: "GET",
            url: API,
            headers: {
                usertoken: usertoken?.value
            }
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

export const fetchAllUsers = async ({
    pageNo = 1,
    pageSize = 25,
}: {
    pageNo?: number,
    pageSize?: number,
}) => {

    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')

    try {
        let API: string = BASE_URL + UserRoutes_API.fetchAllUsers + `?dateDescSort=true&pageNo=${pageNo}&pageSize=${pageSize}`;

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

export async function logoutUser() {
    try {
        cookies().delete('usertoken')
        revalidatePath('/')
        return true;
    }
    catch (error) {
        return false;
    }
}