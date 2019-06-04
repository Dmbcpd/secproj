import React, { Component } from 'react'
import { connect } from 'react-redux'
import {inputPrivateKey} from '../store/actions/inputPrivateKey'

class InputPrivateKey extends Component {
    state = {
        privateKey:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        //this.props.inputPrivateKey(this.state)
    }
}

export default InputPrivateKey;