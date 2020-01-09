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