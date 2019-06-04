import React, { Component } from 'react'
import createChannel from '../../store/actions/createChannel'
import ChannelList from './ChannelList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import CreateChannel from './CreateChannel'
import JoinChannel from './JoinChannel'

class Channels extends Component {
    render(){
        const {channels, auth} = this.props;

        if (!auth.uid) return <Redirect to='/login'/>

        return(
            <div className="feed container" >
                <div className="row">
                    <div className="col s12 m6">
                    <ChannelList channels={channels}/>
                       
                    </div>
                    <div className="col s12 m5 offset-m1">
                    <CreateChannel/>
                    <JoinChannel/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    if(state.firestore.ordered.channels)
    {
        return{
            channels: state.firestore.ordered.channels,
            
            auth:state.firebase.auth
        }
    }
    else
    {
        return{
            channels: state.firestore.ordered.channels,
            
            auth:state.firebase.auth
        }
    }
 
}

export default compose(
    //Here is where we will have our symmetric decrpytion
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'channels'}
    ])
)(Channels)