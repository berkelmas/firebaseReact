import React, { Component } from 'react';
import {connect} from 'react-redux';

import {googleLogin} from '../actions/LoginActions';

class Login extends Component {

googleLogin() {
    this.props.dispatch(googleLogin());
}

  render() {
    return (
      <div>
        { this.props.user.loginCheckLoading ? <p>Girişin Kontrol Ediliyor knk</p> : <button onClick={this.googleLogin.bind(this)}>Google ile Giriş Yap</button> } 
      </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(Login);
