import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getMessages} from '../actions/MessageAction';

class Message extends Component {

    componentDidMount() {
        this.props.dispatch(getMessages())
    }

    render () {
        if (!this.props.messages.loading) {
            return (
                <div>
                {this.props.messages.arr.map((res, index) => 
                <div key={index}>
                    <h3>{res.username}</h3>
                    <p>{res.message }</p>
                </div>
                )}
                </div>
            )
        } else {
            return (
                <div>
                    <p>Daha yuklenıyor knk</p>
                </div>
            )
        }

    }
}

const mapStateToProps = state => ({
    messages : state.message
})

export default connect(mapStateToProps)(Message);