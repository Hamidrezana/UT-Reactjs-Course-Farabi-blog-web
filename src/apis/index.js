import Axios from "axios";

const axiosAgent = Axios.create({
    baseURL: 'https://farabi-blog-server.herokuapp.com'
})

export const register = userInfo => axiosAgent.post('/auth/register', {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    password: userInfo.password
})

export const login = userInfo => axiosAgent.post('/auth/login', {
    email: userInfo.email,
    password: userInfo.password
})