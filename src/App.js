import React, { Component } from 'react';

import firebase from 'firebase';
import Message from './components/Message';
import AddMessage from './components/AddMessage';

import {connect} from 'react-redux';

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

  render() {
    this.props.message.arr.map(res => console.log(res))
    return (
      <div>
        <h1>Mesajlar</h1>
        <Message db={firebase} />
        <AddMessage db={firebase} />
        {this.props.message.arr.map(res => <p>{res.message }</p>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
})

export default connect(mapStateToProps)(App);
