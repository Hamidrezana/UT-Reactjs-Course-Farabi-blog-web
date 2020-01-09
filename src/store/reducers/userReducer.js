const INITIAL_STATE = {
    isLogin: true,
    userInfo: {
        firstName: 'Hamid',
        lastName: 'Nazemi'
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}