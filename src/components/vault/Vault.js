import React, {Component} from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'



class Vault extends Component{
    
    render(){
        const {auth} = this.props;

        if (!auth.uid) return <Redirect to='/login'/>
        return(
            <div className="vault container" >
                <div className="row">
                    <div className="col s12 m6">
                    <form onSubmit={this.handleSubmit} className="clear">
                    <div className="input-field">
                        <label htmlFor="privateKey">Input Private Key</label>
                        <textarea  id="privateKey"  className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn purple">Decrypt Vault</button>
                    </div>
                </form>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <h8>Channels I Own</h8>
                    </div>
                </div>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    console.log(state)
    if(state.firestore.ordered.messages)
    {
        return{
            channels: state.channel.channels,
            messages:state.firestore.ordered.messages,
            auth:state.firebase.auth
        }
    }
    else
    {
        return{
            channels: state.channel.channels,
            messages:state.firestore.ordered.messages,
            auth:state.firebase.auth
        }
    }
 
}

export default compose(
    //Here is where we will have our symmetric decrpytion
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'messages'}
    ])
)(Vault)