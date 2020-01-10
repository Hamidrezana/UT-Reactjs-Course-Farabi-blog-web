import Axios from "axios";

const axiosAgent = Axios.create({
    baseURL: 'https://farabi-blog-server.herokuapp.com'
})

export const setToken = token => axiosAgent.defaults.headers.common['Authorization'] = `Bearer ${token}`

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

export const getBlogs = () => axiosAgent.get('/blog/posts')

export const getUserBlogs = () => axiosAgent.post('/user/blogs')

export const addBlog = (blogInfo) => axiosAgent.post('/blog/add', {
    title: blogInfo.title,
    text: blogInfo.description
})