import React, {Component} from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import InputPrivateKey from './InputPrivateKey';



class Vault extends Component{
    
    render(){
        const {auth} = this.props;

        if (!auth.uid) return <Redirect to='/login'/>
        return(
            <div className="vault container" >
                <div className="row">
                    <div className="col s12 m6">
                        <InputPrivateKey/>
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