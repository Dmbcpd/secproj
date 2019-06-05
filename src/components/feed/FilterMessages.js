import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {filterMessages} from '../../store/actions/filterMessages'




 class FilterMessages extends Component {
    state ={
        current_channel:''
    }
    handleChange = (e) => {
        console.log(e.target)
        const value = e.target.value;
        const name = e.target.name
        console.log(value)
        this.setState({
          [name]: value
        }, () =>{
            this.props.msgfilter(this.state)
        });
        console.log(this.state)
        console.log(this.props)


     }

     handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.current_channel)

     }
    render() {

         const { profile, messages, auth} = this.props;
        const channels =  profile.nameOfChannels
        return (
            <form onChange={this.handleChange}>
              <label>
                Choose a channel
                {channels && channels.map(channel => {
                    return(
                        <div className="radio">
          <label>
            <input type="radio" value={channel}
                                key={channel}
                                name='current_channel'

                                 onChange={this.handleChange}/>
            {channel}
          </label>
        </div>
                    )
                })}

               </label>
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
        msgfilter: (channel) => dispatch(filterMessages(channel))
    }
}

 export default compose(
    //Here is where we will have our symmetric decrpytion
    connect(mapStateToProps, mapDispatchToProps)(FilterMessages)) 