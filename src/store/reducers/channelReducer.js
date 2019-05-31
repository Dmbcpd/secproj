const initState = {
    channels:[
        {id:'1', name:'Atlanta', owner:'Kyle', symkey:'sdf123'},
        {id:'2', name:'Tokyo', owner:'Ryu', symkey:'dsaf234'},
        {id:'3', name:'Berlin', owner:'Hans', symkey:'sdfas124'}
    ],
    current:{id:'2', name:'Tokyo', owner:'Ryu', symkey:'dsaf234'}
}

const channelReducer = (state = initState, action) => {
    return state
}

export default channelReducer