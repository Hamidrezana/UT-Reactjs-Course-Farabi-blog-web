import ActionsTypes from "../utils/ActionsTypes";

export function changeLoginStatus(payload) {
    return {
        type: ActionsTypes.CHANGE_LOGIN_STATUS,
        payload
    }
}

export function changeUserInfo(payload) {
    return {
        type: ActionsTypes.CHANGE_USER_INFO,
        payload
    }
}

export function changeAllBlogs(payload) {
    return{
        type: ActionsTypes.CHANGE_ALL_BLOGS,
        payload
    }
}

export function changeUserBlogs(payload) {
    return {
        type: ActionsTypes.CHANGE_USER_BLOGS,
        payload
    }
}

export function changeAllBlogsLoading(payload) {
    return {
        type: ActionsTypes.CHANGE_ALL_BLOGS_LOADING,
        payload
    }
}

export function changeUserBlogsLoading(payload) {
    return {
        type: ActionsTypes.CHANGE_USER_BLOGS_LOADING,
        payload
    }
}