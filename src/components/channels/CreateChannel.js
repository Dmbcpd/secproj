import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createChannel} from '../../store/actions/createChannel'


class CreateChannel extends Component {
    state ={
        channel:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.createChannel(this.state)
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="clear">
                    <div className="input-field">
                        <label htmlFor="channel">Create Channel</label>
                        <textarea  id="channel"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn purple">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createChannel: (channel) => dispatch(createChannel(channel))
    }
}

export default connect(null, mapDispatchToProps)(CreateChannel)
