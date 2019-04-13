import firebase from 'firebase/app';

export function showMessages(data) {
    return {
        type: 'show_messages',
        payload: {
            list : data
        }
    }
}

export function getMessagesPending() {
    return {
        type: 'show_messages_pending',
    }
}



export function getMessages() {
    return dispatch => {
        dispatch(getMessagesPending());
        const ref = firebase.database().ref('messages');
        ref.on("value", (snapshot) => { 
            const values = snapshot.val();
            let liste = []
            Object.keys(values).map(res => {
                values[res].uid= res;
                liste.push(values[res]);
                
                return values[res];
            })
            dispatch(showMessages(liste))
        })
    }
}


export function sendMessage() {
    return (dispatch, getState) => {
        const refer = firebase.database().ref('messages');
        refer.push({message: getState().message.msgToSend, username: 'Berk Elmas'});
    }
}

export function updateMessageToSend(data) {
    return {
        type: 'update_message_to_send',
        payload: {
            message: data
        }
    }
}
