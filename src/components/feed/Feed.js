import React, { Component } from 'react'
import MessageList from './MessageList'
import SendMessage from './SendMessage'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

class Feed extends Component {
    render(){
        const { messages, auth} = this.props;

        if (!auth.uid) return <Redirect to='/login'/>

        return(
            <div className="feed container" >
                <div className="row">
                    <div className="col s12 m6">
                        <MessageList messages={messages}/>
                        <SendMessage/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                      
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
            
            messages:state.firestore.ordered.messages,
            auth:state.firebase.auth
        }
    }
    else
    {
        return{
            
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
)(Feed)