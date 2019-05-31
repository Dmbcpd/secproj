import React from 'react'


const Channel = ({channel}) => {
    return (

        <div className='channel'> 
            <div>{channel.name} owned by {channel.owner}</div>
        </div>
    )
}


export default Channel
