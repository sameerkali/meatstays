import axios from "axios"

// export const BASE_URL = 'http://localhost:5000'
// export const BASE_URL = 'https://api.meatsays.com'
export const BASE_URL = "https://04f0-2409-40c2-109-d5fa-4011-31d9-f3d4-202a.ngrok-free.app"

export const axiosInstance = axios.create({});

export const apiConnector = ({ method, url, bodyData, headers }: any) => {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null
    });
}

export const AdminRoutes_API: any = {
    loginAdmin: "/api/v1/admin/login-admin",
    validateAdmin: "/api/v1/admin/validate-admin",
} 

export const CategoryRoutes_API: any = {
    createCategory: '/api/v1/category/createCategory',
    fetchAllCategory: '/api/v1/category/fetchAllCategory',
    deleteCategory: '/api/v1/category/deleteCategory',
}

export const ImagesRoutes_API: any = {
    fetchAllImages: '/api/v1/images/fetchAllImages',
    uploadImages: '/api/v1/images/uploadImages'
}

export const ProductsRoutes_API: any = {
    createProduct: '/api/v1/product/createProduct',
    deleteProduct: '/api/v1/product/deleteProduct',
    fetchAllProducts: '/api/v1/product/fetchAllProducts',
    fetchSingle: '/api/v1/product/fetchProduct',
    updateProduct: '/api/v1/product/updateProduct'
}

export const UserRoutes_API: any = {
    registerUser: '/api/v1/user/registerUser',
    verifyAccount: '/api/v1/user/verifyAccount',
    loginUser: '/api/v1/user/loginUser',
    verifyExistingAccount: '/api/v1/user/verifyExistingAccount',
    validateUser: '/api/v1/user/validateUser',
    fetchAllUsers: '/api/v1/user/fetchAllUsers',
    loginWithFirebaseUser: '/api/v1/user/loginWithFirebaseUser',
    createUserAfterPhoneVerification: '/api/v1/user/createUserAfterPhoneVerification',
}

export const OrderRoutes_API: any = {
    createOrder: '/api/v1/order/createOrder',
    fetchMyOrders: '/api/v1/order/fetchMyOrders',
    fetchAllOrders: '/api/v1/order/fetchAllOrders',
    updateOrderStatus: '/api/v1/order/updateOrderStatus',
    getAllStatics: '/api/v1/order/getAllStatics'
}

export const PaymentRoutes_API: any = {
    orderPayment: '/api/v1/payment/orderPayment',
    verifyPayment: '/api/v1/payment/verifyPayment',
    savePaymentDetails: '/api/v1/payment/savePaymentDetails',
}

export const ContactRoutes_API: any = {
    createContact: '/api/v1/contact/createContact',
    fetchAllContact: '/api/v1/contact/fetchAllContact',
}
