const initialState = {
    arr: [
        {

        }
    ],
    loading: false
};

function MessageReducer(state=initialState, {type, payload}) {
    switch (type) {
        case "send_message":
            return {...state, arr: [...state.arr, {message: payload.message, username: 'berk elmas'}]};
        case "show_messages":
            return {...state, arr: [...state.arr, {message: payload.message, username: payload.username, uid: payload.uid}], loading: false};
        case "show_messages_pending":
            return {...state, arr: [...state.arr], loading: true}
        case "show_messages_failed":
            return {...state, arr: [...state.arr], loading: false}
        default:
            return state
    }
}

export default MessageReducer;