const initialState = {
    arr: [
        {
            message: 'deneme mesaji',
            username: 'berk elmas'
        }
    ]
};

function MessageReducer(state=initialState, {type, action}) {
    switch (type) {
        case "send_message":
            return {...state, arr: [...state.arr, {message: action.message, username: 'berk elmas'}]}
        default:
            return state
    }
}

export default MessageReducer;