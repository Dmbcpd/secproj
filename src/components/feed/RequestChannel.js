import React, { Component } from 'react'
import { connect } from 'react-redux'
import {requestChannel} from '../../store/actions/requestChannel'


class RequestChannel extends Component {
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
        this.props.requestChannel(this.state)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="clear">
                    <div className="input-field">
                        <label htmlFor="request">Request Invitation to Channel</label>
                        <textarea  id="request"  className="materialize-textarea" onChange={this.handleChange}></textarea>
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
        requestChannel: (message) => dispatch(requestChannel(message))
    }
}

export default connect(null, mapDispatchToProps)(RequestChannel)
