import React from 'react'
import Channel from './Channel'
import {Link} from 'react-router-dom'

const ChannelList = ({users}) => {


    return (
        <div>
        <span className="card-title"><b>My Channels</b></span>
        <div className="channel section">
            {users && users.map(user => {
                return(
                    
                    <Channel user={user} />
                    
                )
            })}
        </div>
        </div>
    )
}

export default ChannelList