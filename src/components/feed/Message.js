import React from 'react'
import moment from 'moment'

const Message = ({message}) => {
    return(
        <div className="message section">
            <p></p>
            <div className="message">
                <div> {moment(message.timestamp).format('LLL')}  - {message.sender} :  {message.message} </div>
            </div>
        </div>
    )
}

export default Message