import React, { Component } from 'react';
import {connect} from 'react-redux';

import firebase from 'firebase';
import Message from './components/Message';
import AddMessage from './components/AddMessage';

import Login from './components/Login';

import {checkLogin} from './actions/LoginActions';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
  var config = {
      apiKey: "AIzaSyCjMduL-cfm11xatgCBYXbZ9YsivejE4Xw",
      authDomain: "reactauthdeneme.firebaseapp.com",
      databaseURL: "https://reactauthdeneme.firebaseio.com",
      projectId: "reactauthdeneme",
      storageBucket: "reactauthdeneme.appspot.com",
      messagingSenderId: "627494375899"
  };
  firebase.initializeApp(config);
}

componentDidMount() {
  {localStorage.getItem('token') ? this.props.dispatch(checkLogin()) : console.log()}
}

needLogin() {
  return (
    <div>
      <h1>Mesajlar</h1>
      <Message />
      <AddMessage />
      {this.props.user.email}
    </div>
  )
}

render() {
  return (
  <div>
    {this.props.user.loggedIn ? this.needLogin() : <Login/>}
  </div>
  )
}
}

const mapStateToProps = state => ({
  message: state.message,
  user: state.user
})

export default connect(mapStateToProps)(App);
