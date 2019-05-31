import React, { Component } from 'react'
import { connect } from 'react-redux'
import {sendMessage} from '../../store/actions/sendMessage'


class SendMessage extends Component {
    state ={
        message:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.sendMessage(this.state)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="clear">
                    <div className="input-field">
                        <label htmlFor="message">Send a message</label>
                        <textarea  id="message"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn purple">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => dispatch(sendMessage(message))
    }
}

export default connect(null, mapDispatchToProps)(SendMessage)
