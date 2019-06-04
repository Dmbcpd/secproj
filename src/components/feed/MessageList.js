import React from 'react'
import Message from './Message'


const MessageList = ({messages}) => {
    //<div className="message" key={message.id}></div>
    return (
        <div>
        <span className="card-title"><b>Messages</b></span>
        <div className="message-list section">
        {messages && messages.map(message => {
                return(
                    <Message message={message} key={message.id}/>
                )
            })}
        </div>
        <div>
        
            </div>
        </div>



    )
}

export default MessageList