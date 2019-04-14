const initialState = {
    loggedIn: false,
    email: 'deneme',
    loginCheckLoading: true
}

function UserReducer(state=initialState, {type, payload}) {
    switch (type) {
        case 'google_login_check_success':
            return {...state, loggedIn: true, loginCheckLoading: false}
        case 'google_login_check_failed':
            return {...state, loginCheckLoading: false}
        case 'change_login_state':
            return {...state, loggedIn: true, email: payload.email}
        default:
            return state
    }
}

export default UserReducer;