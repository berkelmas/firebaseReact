import firebase from 'firebase';

export function showMessages(data) {
    return {
        type: 'show_messages',
        payload: {
            message: data.message,
            username: data.username,
            uid: data.uid
        }
    }
}

export function getMessagesPending() {
    return {
        type: 'show_messages_pending',
    }
}

export function getMessagesSuccess() {
    return {
        type: 'show_messages_success'
    }
}


export function getMessages() {
    return dispatch => {
        dispatch(getMessagesPending());
        const ref = firebase.database().ref('messages');
        ref.on("value", (snapshot) => { 
            const values = snapshot.val();
            Object.keys(values).map(res => {
                values[res].uid= res;
                dispatch(showMessages(values[res]))
                return values[res];
            })
        dispatch(getMessagesSuccess());
        })
    }
}