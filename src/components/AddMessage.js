import React, {Component} from 'react';
import {connect} from 'react-redux';

import {sendMessage, updateMessageToSend} from '../actions/MessageAction';

class AddMessage extends Component {

    updateState(e) {
        this.props.dispatch(updateMessageToSend(e.target.value));
        
    }

    sendMessage() {
        this.props.dispatch(sendMessage());
        document.getElementById('deger').value = ''; 
    }

    render(){
        return(
            <div>
                <input  id="deger" onChange={this.updateState.bind(this)} placeholder="mesajini gir knk"/>
                <button onClick={this.sendMessage.bind(this)}>Gonder knk</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    message : state.message
})

export default connect(mapStateToProps)(AddMessage);


/*         const refer = this.props.db.database().ref('messages');
        refer.push(this.state)
        this.setState({
            message: ''
        }) */