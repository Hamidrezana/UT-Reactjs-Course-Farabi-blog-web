import ActionsTypes from "../../utils/ActionsTypes"

const INITIAL_STATE = {
    isLogin: false,
    userInfo: {
        firstName: 'Hamid',
        lastName: 'Nazemi'
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionsTypes.CHANGE_LOGIN_STATUS:
            return Object.assign({}, state, {
                isLogin: action.payload
            })
        case ActionsTypes.CHANGE_USER_INFO:
            return Object.assign({}, state, {
                userInfo: action.payload
            })
        default:
            return state
    }
}