import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {inputPrivateKey} from '../../store/actions/inputPrivateKey'

class InputPrivateKey extends Component {
    state = {
        privateKey:''
    }

    handleChange = (e) => {
        console.log(e.target)
        const value = e.target.value;
        const name = e.target.name
        console.log(value)
        this.setState({
          [name]: value
        });
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.inputPK(this.state)
        //this.props.inputPrivateKey(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="clear">
                <div className="input-field">
                <label htmlFor="privateKey">Input Private Key</label>
                        <textarea  name='privateKey' id="privateKey"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn purple">Decrypt Vault</button>
                    </div>
                </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    if(state.firestore.ordered.messages)
    {
        return{

            users: state.firestore.ordered.users,
            messages:state.firestore.ordered.messages,
            auth:state.firebase.auth,
            profile: state.firebase.profile,
            current_channel: state.msgfilter.current_channel
        }
    }
    else
    {
        return{
            users: state.firestore.ordered.users,
            messages:state.firestore.ordered.messages,
            auth:state.firebase.auth,
            profile: state.firebase.profile,
            current_channel: state.msgfilter.current_channel
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputPK: (channel) => dispatch(inputPrivateKey(channel))
    }
}

export default compose(
    //Here is where we will have our symmetric decrpytion
    connect(mapStateToProps, mapDispatchToProps)(InputPrivateKey))