import ActionsTypes from "../../utils/ActionsTypes"

const INITIAL_STATE = {
    allBlogs: [],
    userBlogs: [],
    allBlogsLoading: false,
    userBlogsLoading: false,
    reloadBlogs: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionsTypes.CHANGE_ALL_BLOGS:
            return Object.assign({}, state, {
                allBlogs: action.payload
            })
        case ActionsTypes.CHANGE_USER_BLOGS:
            return Object.assign({}, state, {
                userBlogs: action.payload
            })
        case ActionsTypes.CHANGE_ALL_BLOGS_LOADING:
            return Object.assign({}, state, {
                allBlogsLoading: action.payload
            })
        case ActionsTypes.CHANGE_USER_BLOGS_LOADING:
            return Object.assign({}, state, {
                userBlogsLoading: action.payload
            })
        case ActionsTypes.CHANGE_REALOAD_BLOGS:
            return Object.assign({}, state, {
                reloadBlogs: !state.reloadBlogs
            })
        default:
            return state
    }
}