import { axiosInstance } from "./config"

export const getProducts = () => {
    return axiosInstance.get('/products')
}