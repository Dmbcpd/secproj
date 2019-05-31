import React from 'react'
import Channel from './Channel'
import {Link} from 'react-router-dom'

const ChannelList = ({channels}) => {
    return (
        <div>
        <span className="card-title"><b>Channels</b></span>
        <div className="channel section">
            {channels && channels.map(channel => {
                return(
                    <Link to={'/channel/' + channel.id} key={channel.id}>
                    <Channel channel={channel} />
                    </Link>
                )
            })}
        </div>
        </div>
    )
}

export default ChannelList