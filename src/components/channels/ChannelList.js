import React from 'react'
import Channel from './Channel'


const ChannelList = ({channels}) => {
    return (
        <div>
        <span className="card-title"><b>Channels</b></span>
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