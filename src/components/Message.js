import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        const ref = this.props.db.database().ref('messages');
        ref.on("value", (snapshot) => { 
            const values = snapshot.val();
            let liste = []
            Object.keys(values).map(res => {
                values[res].uid= res;
                liste.push(values[res]);
                return liste;
            })
            this.setState({
                ...this.state,
                messages: liste
            })
            console.log(this.state.messages)
        })
    }

    render () {
        return (
            <div>
                {this.state.messages.map((res) => {
                    return (
                        <div key={res.uid}>
                            <h3>{res.username}</h3>
                            <p>{res.message}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Message;