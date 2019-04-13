const initialState = {
    arr: [
        {

        }
    ],
    loading: false,
    msgToSend: ''
};

function MessageReducer(state=initialState, {type, payload}) {
    switch (type) {
        case "show_messages":
            return {...state, arr: payload.list, loading: false};
        case "show_messages_pending":
            return {...state, arr: [...state.arr], loading: true};
        case "show_messages_failed":
            return {...state, arr: [...state.arr], loading: false};
        case "update_message_to_send":
            return {...state, arr: [...state.arr], msgToSend: payload.message}
        default:
            return state
    }
}

export default MessageReducer;