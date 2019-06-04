import React, { Component } from 'react'
import { connect } from 'react-redux'
import {joinChannel} from '../../store/actions/joinChannel'


class JoinChannel extends Component {
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
        this.props.joinChannel(this.state)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="clear">
                    <div className="input-field">
                        <label htmlFor="message">Type Channel Name</label>
                        <textarea  id="message"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn purple">Send Request</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        joinChannel: (message) => dispatch(joinChannel(message))
    }
}

export default connect(null, mapDispatchToProps)(JoinChannel)
