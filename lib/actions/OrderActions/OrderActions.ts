'use server'
import { cookies } from 'next/headers'
import { apiConnector, BASE_URL, UserRoutes_API, OrderRoutes_API, PaymentRoutes_API } from "@/lib/services/apis";
import { revalidatePath } from 'next/cache'

export const createOrder = async (values: any) => {
    const cookieStore = cookies()
    const usertoken = cookieStore.get('usertoken');

    try {
        let API = BASE_URL + UserRoutes_API.validateUser;
        let res = await apiConnector({
            method: "GET",
            url: API,
            headers: {
                usertoken: usertoken?.value
            }
        });

        API = BASE_URL + OrderRoutes_API.createOrder;
        res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: values,
            headers: {
                usertoken: usertoken?.value
            }
        });
        revalidatePath('/orders')
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

export const OrderPayment = async (orderId?: string) => {
    try {
        let API = BASE_URL + PaymentRoutes_API.orderPayment;
        let res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: {
                orderId
            },
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


export const VerifyPayment = async (response?: any) => {
    try {
        let API = BASE_URL + PaymentRoutes_API.verifyPayment;
        let res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: response
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


export const SavePaymentDetails = async (values?: any) => {
    const cookieStore = cookies()
    const usertoken = cookieStore.get('usertoken');
    try {
        let API = BASE_URL + PaymentRoutes_API.savePaymentDetails;
        let res = await apiConnector({
            method: "POST",
            url: API,
            bodyData: values,
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
}

export const fetchMyOrders = async ({
    pageNo = 1,
    pageSize = 25,
}: {
    pageNo?: number,
    pageSize?: number,
}) => {

    const cookieStore = cookies()
    const usertoken = cookieStore.get('usertoken')

    try {
        let API: string = BASE_URL + OrderRoutes_API.fetchMyOrders + `?dateDescSort=true&pageNo=${pageNo}&pageSize=${pageSize}`;

        const res = await apiConnector({
            method: "GET",
            url: API,
            headers: { usertoken: usertoken?.value },
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

export const fetchAllOrders = async ({
    pageNo = 1,
    pageSize = 25,
}: {
    pageNo?: number,
    pageSize?: number,
}) => {

    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')

    try {
        let API: string = BASE_URL + OrderRoutes_API.fetchAllOrders + `?dateDescSort=true&pageNo=${pageNo}&pageSize=${pageSize}`;

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

export const updateOrderStatus = async ({
    id,
    orderStatus,
}: {
    id: string,
    orderStatus: string,
}) => {

    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')

    try {
        let API: string = BASE_URL + OrderRoutes_API.updateOrderStatus;

        const res = await apiConnector({
            method: "PUT",
            url: API,
            headers: { authtoken: authtoken?.value },
            bodyData:{
                id,
                orderStatus
            }
        });
        revalidatePath('/orders')
        revalidatePath('/en/admin/dashboard/manage-orders')
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

export const getAllStatics = async () => {

    const cookieStore = cookies()
    const authtoken = cookieStore.get('admintoken')

    try {
        let API: string = BASE_URL + OrderRoutes_API.getAllStatics;

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
