import React from 'react'


const Channel = ({channel}) => {
    return (

        <div className='channel'> 
            <div>{channel.channel} owned by {channel.publicKey}</div>
        </div>
    )
}


export default Channel
