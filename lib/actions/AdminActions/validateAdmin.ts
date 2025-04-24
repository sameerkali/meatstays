'use server'
import { BASE_URL, AdminRoutes_API, apiConnector } from "@/lib/services/apis";

export const validateAdmin = async (authtoken: string) => {
    try {
        const API = BASE_URL + AdminRoutes_API.validateAdmin;
        const res = await apiConnector({
            method: "GET",
            url: API,
            headers: {
                authtoken: authtoken
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