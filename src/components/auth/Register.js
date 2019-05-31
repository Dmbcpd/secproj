import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'

class Register extends Component {
    state ={
        email:'',
        password:'',
        publicKey:'',
        nickName:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }


    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/'/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="clear">
                    <h5 className="grey-text">Register</h5>
                    <div className="input-field col s6">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="nickname">Nickname</label>
                        <input type="text" id="nickName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="publicKey">Public Key</label>
                        <input type="text" id="publicKey" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn purple">Register</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p>: null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Register)
