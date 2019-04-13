import React, {Component} from 'react';

class AddMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message : '',
            username: 'can elbirlik'
        }
    }

    updateState(e) {
        this.setState({
            ...this.state,
            message : e.target.value
        })
    }

    sendMessage() {
        const refer = this.props.db.database().ref('messages');
        refer.push(this.state)
        this.setState({
            message: ''
        })
    }

    render(){
        return(
            <div>
                <input onChange={this.updateState.bind(this)} placeholder="mesajini gir knk"/>
                <button onClick={this.sendMessage.bind(this)}>Gonder knk</button>
            </div>
        )
    }
}

export default AddMessage;