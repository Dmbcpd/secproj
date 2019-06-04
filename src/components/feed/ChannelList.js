import React from 'react'
import Channel from './Channel'
import {Link} from 'react-router-dom'

const ChannelList = ({channels}) => {


    return (
        <div>
        <span className="card-title"><b>My Channels</b></span>
        <div className="channel section">
            {channels && channels.map(channel => {
                return(
                    
                    <Channel channel={channel} />
                    
                )
            })}
        </div>
        </div>
    )
}

export default ChannelList