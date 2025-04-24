'use server'

import { cookies } from 'next/headers'
import { BASE_URL, AdminRoutes_API, apiConnector } from "@/lib/services/apis";
import { AdminLoginFormFields } from '@/app/(root)/en/admin/login/page';

export const loginAdmin = async (values: AdminLoginFormFields) => {
    try {
        const API = BASE_URL + AdminRoutes_API.loginAdmin;
        const res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: {
                email: values.email.trim().toLowerCase(),
                password: values.password,
            }, 
            // headers: { token: admin.token }
        });
        const oneDay = 1 * 60 * 60 * 1000
        cookies().set({
            name: 'admintoken',
            value: res.data.data,
            httpOnly: true,
            path: '/',
            maxAge: Date.now() - oneDay,
            expires: Date.now() - oneDay
        })
        return res.data;
    }
    catch (error: any) {
        return error.response.data;
    }
};