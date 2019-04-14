import firebase from 'firebase/app';

export function changeLoginState(data){
    return {
        type: 'change_login_state',
        payload: {
            email: data
        }
    }
}

export function googleLogin() {
    return dispatch => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const token = result.credential.accessToken;
                const {email} = result.user;
                
                localStorage.setItem('token', token)
                dispatch(changeLoginState(email))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function googleCheckSuccess() {
    return {
        type: 'google_login_check_success',
    }
}

export function googleCheckFailed() {
    return {
        type: 'google_login_check_failed'
    }
}

export function checkLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');
        const credential = firebase.auth.GoogleAuthProvider.credential(
            null, token)
            firebase.auth().signInWithCredential(credential)
            .then(res => dispatch(googleCheckSuccess()))
            .catch(err => dispatch(googleCheckFailed()))
    }
}